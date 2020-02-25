export interface TeamMember {
  uid: string;
  captain: boolean;
  role: string;
  remote: boolean;
}

export class Team {
  name?: string;
  members?: Array<TeamMember>;
  gameIdea?: string;

  constructor(
    name: string = "",
    members: Array<TeamMember> = [],
    gameIdea: string = ""
  ) {
    this.name = name;
    this.members = members;
    this.gameIdea = gameIdea;
  }
}
