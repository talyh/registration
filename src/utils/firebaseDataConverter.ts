import { User } from "../typings/User";
import { JamAttendance } from "../typings/JamAttendance";

export const userConverter = {
  toFirestore: (user: User) => {
    return {
      name: user.name,
      email: user.email,
      nickname: user.nickname,
      phone: user.phone,
      occupation: user.occupation,
      company: user.company,
      website: user.website,
      birthDate: user.birthDate,
      jamsAttended: user.jamsAttended
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    return new User(
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
  }
};

export const jamAttendanceConverter = {
  toFirestore: (jamAttendance: JamAttendance) => {
    return {
      gbStudent: jamAttendance.gbStudent,
      gbRoom: jamAttendance.gbRoom,
      participation: jamAttendance.participation,
      role: jamAttendance.role,
      floatersNeeded: jamAttendance.floatersNeeded,
      remote: jamAttendance.remote,
      hardwareNeeded: jamAttendance.hardwareNeeded,
      gameIdea: jamAttendance.gameIdea,
      baby: jamAttendance.baby,
      rage: jamAttendance.rage,
      comments: jamAttendance.comments
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    return new JamAttendance(
      data.gbStudent,
      data.gbRoom,
      data.participation,
      data.role,
      data.floatersNeeded,
      data.remote,
      data.hardwareNeeded,
      data.gameIdea,
      data.baby,
      data.rage,
      data.comments
    );
  }
};
