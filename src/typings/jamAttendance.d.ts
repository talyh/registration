// TODO - Review this agains annotation
export class JamAttendance {
  gbRoom?: string;
  role: string;
  participation: string;
  baby: boolean;
  team?: ITeam;
  hardwareNeeded?: string;
  rage?: string;
  comments?: string;

  constructor(
    gbRoom,
    role,
    participation,
    baby,
    team,
    hardwareNeeded,
    rage,
    comments
  ) {
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
