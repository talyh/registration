import { JamAttendance } from "../typings/JamAttendance";

// converter to ensure type consistency back and forth firebase
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
      baby: jamAttendance.baby,
      rage: jamAttendance.rage,
      comments: jamAttendance.comments,
      team: jamAttendance.team // TODO - THIS!
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
      data.baby,
      data.rage,
      data.comments,
      data.team // TODO - THIS!
    );
  }
};
