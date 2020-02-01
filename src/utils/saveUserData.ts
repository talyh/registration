import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const saveUserData = async (uid: string, userData: IUser) => {
  try {
    if (!uid || !userData) {
      throw new Error("Invalid user data");
    }

    // TODO - Find a way to abstract this so it's not repeated throughout
    const usersCollection = firebase.firestore().collection("Users");
    await usersCollection.doc(uid).set(userData);
  } catch (error) {
    // TODO - determine how to handle errors
    console.error(error);
  }
};
