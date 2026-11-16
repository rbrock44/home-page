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

  public constructor(init?: Partial<Game>) {
    Object.assign(this, init);
  }
}
