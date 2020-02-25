import { JamAttendance } from "./JamAttendance";

// this has to be a class to allow conversion to and from Firebase
export class User {
  name: string;
  email: string;
  nickname?: string;
  phone?: string;
  occupation?: string;
  company?: string;
  website?: string;
  birthDate?: Date | null;
  jamsAttended?: Array<number>;
  currentJam: JamAttendance;

  constructor(
    name: string,
    email: string,
    nickname: string = "",
    phone: string = "",
    occupation: string = "",
    company: string = "",
    website: string = "",
    birthDate: Date | null = null,
    jamsAttended: Array<number> = [new Date().getFullYear()],
    currentJam = new JamAttendance()
  ) {
    this.name = name;
    this.email = email;
    this.nickname = nickname;
    this.phone = phone;
    this.occupation = occupation;
    this.company = company;
    this.website = website;
    this.birthDate = birthDate;
    this.jamsAttended = jamsAttended;
    this.currentJam = currentJam;
  }
  toString() {
    return this.name + ", " + this.email;
  }

  // TODO - Find a way to properly determine the return type for this,
  // so it can be referred to consistenly outside of the class (ie. Form field names)
  // getKeys = <K extends keyof User>(): { [K]: K } => {
  //   return Object.fromEntries(
  //     Object.getOwnPropertyNames(this).map(key => [key, key])
  //   );
  // };
}
