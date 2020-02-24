import { JamAttendance } from "../typings/jamAttendance.d";

// converter to ensure type consistency back and forth firebase
export const jamAttendanceConverter = {
  toFirestore: (jamAttendance: JamAttendance) => {
    return {
      gbStudent: jamAttendance.gbStudent || false,
      gbRoom: jamAttendance.gbRoom || "",
      role: jamAttendance.role || "",
      participation: jamAttendance.participation || "",
      baby: jamAttendance.baby || false,
      hardwareNeeded: jamAttendance.hardwareNeeded || "",
      rage: jamAttendance.rage || "",
      comments: jamAttendance.comments || ""
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    return new JamAttendance(
      data.gbStudent,
      data.gbRoom,
      data.role,
      data.participation,
      data.baby,
      data.team,
      data.hardwareNeeded,
      data.rage,
      data.comments
    );
  }
};
