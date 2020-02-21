import { JamAttendance } from "./jamAttendance";

export class User {
  name: string;
  email: string;
  nickname?: string;
  phone?: string;
  occupation?: string;
  company?: string;
  website?: string;
  birthDate?: Date;
  jamsAttended: Array<number>;
  currentJam?: JamAttendance;

  constructor(
    name,
    email,
    nickname,
    phone,
    occupation,
    company,
    website,
    birthDate,
    jamsAttended
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
  }
  toString() {
    return this.name + ", " + this.email;
  }
}
