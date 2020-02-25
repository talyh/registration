import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { userConverter, jamAttendanceConverter } from "./firebaseDataConverter";
import { collections } from "../firebaseConfig";
import { User } from "../typings/User";
import { JamAttendance } from "../typings/JamAttendance";

export const getSavedUserData = async (uid: string) => {
  try {
    if (!uid) {
      throw new Error("Invalid user id");
    }

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
      let user = record.data() as User;

      // adjust birthDate because firestore has issues with Dates
      const birthDate =
        record?.data()?.birthDate &&
        ((record?.data()
          ?.birthDate as unknown) as firebase.firestore.Timestamp).toDate();
      user.birthDate = birthDate;

      // adjust jamsAttended (likely won't be needed after the first year using this new form)
      const jamsAttended = record.data()?.jamsAttended || [];
      if (jamsAttended.length === 0) {
        jamsAttended.push(new Date().getFullYear());
      }
      user.jamsAttended = jamsAttended;

      if (currentJam.exists) {
        user.currentJam = currentJam.data() as JamAttendance;
      }

      return user;
    } else {
      throw new Error("Record not found");
    }
  } catch (error) {
    // TODO - determine how to handle errors
    console.error(error);
  }
};
