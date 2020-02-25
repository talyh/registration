// This file is the central location if form values need changing

export const jamName = `TOJam ${new Date().getFullYear()} - The Phoenix Jam`;

export enum Occupation {
  "Student",
  "Hobbyist",
  "Professional"
}
export const ocuppation = Object.keys(Occupation);

export const jamsAttended = [
  2020,
  2018,
  2017,
  2016,
  2015,
  2014,
  2013,
  2012,
  2011,
  2010,
  2009,
  2008
];

export const gbRoom = ["THESE VALUES ARE TEMPORARY!!", "Room A", "Room B"];

export enum Participation {
  "Solo" = "Solo",
  "Team" = "Team",
  "Floater - Graphics" = "Floater - Graphics",
  "Floater - Audio" = "Floater - Audio"
}
export const participation = Object.keys(Participation);

export enum SoloRoles {
  "Programmer" = "Programmer"
}
export enum TeamRoles {
  "Programmer" = "Programmer",
  "Graphics" = "Graphics",
  "Designer" = "Designer",
  "Sound" = "Sound"
}
export enum FloaterGraphicsRoles {
  "2D" = "2D",
  "3D" = "3D",
  "Both" = "Both"
}
export enum FloatersAudioRoles {
  "Sound" = "Sound",
  "Music" = "Music",
  "Both" = "Both"
}
export const roles = {
  Solo: Object.keys(SoloRoles),
  Team: Object.keys(TeamRoles),
  "Floater - Graphics": Object.keys(FloaterGraphicsRoles),
  "Floater - Audio": Object.keys(FloatersAudioRoles)
};

export enum FloatersRequest {
  "Graphics - 2D" = "Graphics - 2D",
  "Graphics - 3D" = "Graphics - 3D",
  "Audio - Sound" = "Audio - Sound",
  "Audio - Music" = "Audio - Music"
}
export const floatersRequest = Object.keys(FloatersRequest);

export const hardwareNeeded = {
  bringingLaptop: "A Laptop - NO external monitor",
  bringingLaptopMonitor: "A Laptop + external monitor",
  bringingFullMachine: "A Full Machine (monitor, network card)",
  notBringingComputer: "Nothing. Give me a George Brown machine"
};

export const rage = [
  "Wet Bricks",
  "Wet Jeany Bricks",
  "Water",
  "Leaky Jeans",
  "Jeans",
  "Brick Jeans",
  "Bricks"
];
