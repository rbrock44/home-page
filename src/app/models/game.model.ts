export class Game {
  opponent!: string;
  opponentImageLink!: string;
  opponentTeamLink!: string;
  opponentRecord!: string;
  home!: string;
  homeImageLink!: string;
  homeTeamLink!: string;
  homeRecord!: string;
  time!: string;
  // the game is being played right now
  live?: boolean;
  // running score while live, e.g. "DAL 17, SEA 21"; empty otherwise
  score?: string;
  // ESPN's page for this matchup; empty when ESPN doesn't list one
  gameLink?: string;

  public constructor(init?: Partial<Game>) {
    Object.assign(this, init);
  }
}
