import {
  ParticipationType,
  SoloRoles,
  TeamRoles,
  FloaterGraphicsRoles,
  FloatersAudioRoles
} from "../jamConfig";

interface IStandsAlone {
  floatersNeeded: Array<string>;
  gameIdea: string;
  hardwareNeeded: string;
}

export class Participation {
  type: ParticipationType | null;
  hardwareNeeded: string;

  constructor(
    type: ParticipationType | null = null,
    hardwareNeeded: string = ""
  ) {
    this.type = type;
    this.hardwareNeeded = hardwareNeeded;
  }
}

export class SoloParticipation extends Participation implements IStandsAlone {
  role: SoloRoles;
  floatersNeeded: Array<string>;
  gameIdea: string;

  constructor(
    role: SoloRoles,
    floatersNeeded: Array<string> = [],
    gameIdea = "",
    hardwareNeeded = ""
  ) {
    super(ParticipationType.Solo, hardwareNeeded);

    this.role = role;
    this.floatersNeeded = floatersNeeded;
    this.gameIdea = gameIdea;
  }
}

interface TeamMember {
  uid: string;
  role: TeamRoles;
  remote: boolean;
}

export class TeamParticipation extends Participation implements IStandsAlone {
  members: Array<TeamMember>;
  captain: string;
  floatersNeeded: Array<string>;
  gameIdea: string;

  constructor(
    members: Array<TeamMember> = [],
    captain: string = "",
    floatersNeeded: Array<string> = [],
    gameIdea: string = "",
    hardwareNeeded: string = ""
  ) {
    super(ParticipationType.Team, hardwareNeeded);

    this.members = members;
    this.captain = captain;
    this.floatersNeeded = floatersNeeded;
    this.gameIdea = gameIdea;
  }
}

type FloaterParticipationType =
  | ParticipationType.FloaterGraphics
  | ParticipationType.FloaterAudio;
type FloaterRoles = FloaterGraphicsRoles | FloatersAudioRoles;

export class FloaterParticipation extends Participation {
  role: FloaterRoles;

  constructor(
    type: FloaterParticipationType,
    role: FloaterRoles,
    hardwareNeeded: string
  ) {
    super(type, hardwareNeeded);

    this.role = role;
  }
}
