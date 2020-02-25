import { roles } from "../jamConfig";

export class JamAttendance {
  gbStudent: boolean;
  gbRoom?: string;
  participation: string;
  role?: string;
  floatersNeeded: Array<string>;
  remote: boolean;
  hardwareNeeded: string;
  baby: boolean;
  rage?: string;
  comments?: string;
  team: string; // TODO - THIS!

  constructor(
    gbStudent = false,
    gbRoom = "",
    participation = "",
    role = "",
    floatersNeeded = [],
    remote = false,
    hardwareNeeded = "",
    baby = false,
    rage = "",
    comments = "",
    team = "" // TODO - THIS!
  ) {
    this.gbStudent = gbStudent;
    this.gbRoom = gbRoom;
    this.participation = participation;
    this.role = role;
    this.floatersNeeded = floatersNeeded;
    this.remote = remote;
    this.hardwareNeeded = hardwareNeeded;
    this.baby = baby;
    this.rage = rage;
    this.comments = comments;
    this.team = team; // TODO - THIS!
  }

  checkConflicts = () => {
    const errors: Array<Error> = [];

    // check gbStudent x gbRoom
    if ((!this.gbStudent && this.gbRoom) || (this.gbStudent && !this.gbRoom)) {
      errors.push(new Error("Incompatible gbStudent and gbRoom configuration"));
    }

    // check participation x role
    // @ts-ignore - Even though the key strings are the same, TS didn't like converting
    if (this.participation && !roles[this.participation]?.includes(this.role)) {
      errors.push(Error("Incompatible participation and role configuration"));
    }

    // check participation x floaters request
    if (
      this.participation?.search(/(Floater)/gm) >= 0 &&
      this.floatersNeeded?.length > 0
    ) {
      errors.push(
        Error("Incompatible participation and floater request configuration")
      );
    }

    // check participation x remote
    if (this.participation !== "Team" && this.remote) {
      errors.push(Error("Incompatible participation and remote configuration"));
    }

    if (errors.length > 0) {
      throw errors;
    }
  };
}
