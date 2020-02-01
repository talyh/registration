import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const getSavedUserData = async (
  uid: string
): Promise<IUser | undefined> => {
  try {
    if (!uid) {
      throw new Error("Invalid user id");
    }

    // TODO - Find a way to abstract this so it's not repeated throughout
    const usersCollection = firebase.firestore().collection("Users");
    const record = await usersCollection.doc(uid).get();
    if (record.exists) {
      return record.data() as IUser;
    } else {
      throw new Error("Record not found");
    }
  } catch (error) {
    // TODO - determine how to handle errors
    console.error(error);
  }
};
