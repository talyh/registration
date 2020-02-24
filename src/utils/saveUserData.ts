import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userConverter } from "./userConverter";
import { jamAttendanceConverter } from "./jamAttendanceConverter";
import { User } from "../typings/User";
import { JamAttendance } from "../typings/jamAttendance";
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

    const jamAttendanceData: JamAttendance = {
      gbStudent: data.currentJam?.gbStudent || false,
      gbRoom: data.currentJam?.gbRoom || "",
      role: data.currentJam?.role || "",
      participation: data.currentJam?.participation || "",
      baby: data.currentJam?.baby || false,
      hardwareNeeded: data.currentJam?.hardwareNeeded || "",
      rage: data.currentJam?.rage || "",
      comments: data.currentJam?.comments || ""
    };

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
