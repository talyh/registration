import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userConverter } from "./userConverter";
import { jamAttendanceConverter } from "./jamAttendanceConverter";
import { User } from "../typings/user";
import { JamAttendance } from "../typings/jamAttendance";
import { collections } from "../firebaseConfig";

export const saveUserData = async (uid: string, data: any) => {
  try {
    if (!uid || !data) {
      throw new Error("Invalid user data");
    }

    const userData: User = {
      name: data.name,
      email: data.email,
      nickname: data.nickname || "",
      phone: data.phone || "",
      occupation: data.occupation || "",
      company: data.company || "",
      website: data.website || "",
      birthDate: data.birthDate,
      jamsAttended: data.jamsAttended
    };

    const jamAttendanceData: JamAttendance = {
      gbRoom: data.gbRoom || "",
      role: data.role || "",
      participation: data.participation || "",
      baby: data.baby || false,
      hardwareNeeded: data.hardwareNeeded || "",
      rage: data.rage || "",
      comments: data.comments || ""
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
