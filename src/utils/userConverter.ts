import { User } from "../typings/User";

// converter to ensure type consistency back and forth firebase
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
