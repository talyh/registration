enum ParticipationType {
  Solo,
  Team,
  Floater
}

interface IParticipation {
  participationType: ParticipationType;
  gameIdea?: string;
  hardwareNeeded: string;
  floatersNeeded?: Array<Roles>;
}

interface ITeam extends IParticipation {
  captain: string;
  name: string;
}
