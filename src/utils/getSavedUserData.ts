import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userConverter } from "./userConverter";
import { jamAttendanceConverter } from "./jamAttendanceConverter";
import { collections } from "../firebaseConfig";
import { User } from "../typings/user";
import { jamsAttended } from "../jamConfig";

export const getSavedUserData = async (uid: string) => {
  try {
    if (!uid) {
      throw new Error("Invalid user id");
    }

    let user;

    // TODO - Find a way to abstract this so it's not repeated throughout
    const userRef = firebase
      .firestore()
      .collection(collections.users)
      .doc(uid)
      .withConverter(userConverter);
    const record = await userRef.get();
    const currentJam = await record.ref
      .collection(collections.jamAttendance)
      .doc(new Date().getFullYear().toString())
      .withConverter(jamAttendanceConverter)
      .get();
    if (record.exists) {
      // adjust birthDate because firestore has issues with Dates
      const birthDate = ((record?.data()
        ?.birthDate as unknown) as firebase.firestore.Timestamp).toDate();

      // adjust jamsAttended (likely won't be needed after the first year using this new form)
      if (record.data()?.jamsAttended?.length === 0) {
        jamsAttended.push(new Date().getFullYear());
      }
      user = record.data() as User;
      user.birthDate = birthDate;
      if (currentJam.exists) {
        user.currentJam = currentJam.data() as any;
      }
    } else {
      throw new Error("Record not found");
    }

    return user;
  } catch (error) {
    // TODO - determine how to handle errors
    console.error(error);
  }
};
