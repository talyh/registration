enum Roles {
  Programmer,
  Artist3D,
  Artist2D,
  Designer,
  Sound
}

export class JamAttendance {
  gbStudent: boolean;
  gbRoom?: string;
  role: Role;
  participation: Participation;
  baby: boolean;
  hardwareNeeded?: string;
  rage?: string;
  comments?: string;

  constructor(
    gbStudent,
    gbRoom,
    role,
    participation,
    baby,
    team,
    hardwareNeeded,
    rage,
    comments
  ) {
    this.gbStudent = gbStudent;
    this.gbRoom = gbRoom;
    this.role = role;
    this.participation = participation;
    this.baby = baby;
    this.team = team;
    this.hardwareNeeded = hardwareNeeded;
    this.rage = rage;
    this.comments = comments;
  }
}
