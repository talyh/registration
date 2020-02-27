import { Participation } from "./Participation";

export class JamAttendance {
  participation: Participation;
  gbStudent: boolean;
  gbRoom?: string;
  babyComing: boolean;
  rage?: string;
  comments?: string;

  constructor(
    participation: Participation = new Participation(),
    gbStudent: boolean = false,
    gbRoom: string = "",
    babyComing: boolean = false,
    rage: string = "",
    comments: string = ""
  ) {
    this.participation = participation;
    this.gbStudent = gbStudent;
    this.gbRoom = gbRoom;
    this.babyComing = babyComing;
    this.rage = rage;
    this.comments = comments;
  }

  // TODO - Revisit after team implementation
  checkConflicts = () => {
    // const errors: Array<Error> = [];
    // // check gbStudent x gbRoom
    // if ((!this.gbStudent && this.gbRoom) || (this.gbStudent && !this.gbRoom)) {
    //   errors.push(new Error("Incompatible gbStudent and gbRoom configuration"));
    // }
    // // check participation x role
    // // @ts-ignore - Even though the key strings are the same, TS didn't like converting
    // if (this.participation && !roles[this.participation]?.includes(this.role)) {
    //   errors.push(Error("Incompatible participation and role configuration"));
    // }
    // // check participation x floaters request
    // if (
    //   this.participation?.search(/(Floater)/gm) >= 0 &&
    //   this.floatersNeeded?.length > 0
    // ) {
    //   errors.push(
    //     Error("Incompatible participation and floater request configuration")
    //   );
    // }
    // // check participation x remote
    // if (this.participation !== "Team" && this.remote) {
    //   errors.push(Error("Incompatible participation and remote configuration"));
    // }
    // if (errors.length > 0) {
    //   throw errors;
    // }
  };
}
