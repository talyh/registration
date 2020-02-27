import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userConverter, jamAttendanceConverter } from "./firebaseDataConverter";
import { User } from "../typings/User";
import { JamAttendance } from "../typings/JamAttendance";
import { collections } from "../firebaseConfig";

export const saveUserData = async (uid: string, data: any) => {
  try {
    if (!uid || !data) {
      throw new Error("Invalid user data");
    }

    const userData = new User(
      data.name,
      data.email,
      data.nickname,
      data.phone,
      data.occupation,
      data.company,
      data.website,
      data.birthDate,
      data.jamsAttended
    );

    const jamAttendanceData = new JamAttendance(
      data.currentJam?.participation,
      data.currentJam?.gbStudent,
      data.currentJam?.gbRoom,
      data.currentJam?.babyComing,
      data.currentJam?.rage,
      data.currentJam?.comments
    );

    jamAttendanceData.checkConflicts(); // TODO - This has to feed back into the form

    await firebase.firestore().runTransaction(async transaction => {
      const user = firebase
        .firestore()
        .collection(collections.users)
        .doc(uid)
        .withConverter(userConverter);
      const jamAttendance = user
        .collection(collections.jamAttendance)
        .doc(new Date().getFullYear().toString())
        .withConverter(jamAttendanceConverter);

      transaction.set(user, userData);
      transaction.set(jamAttendance, jamAttendanceData);
    });
  } catch (error) {
    // TODO - determine how to handle errors
    console.error(error);
  }
};
