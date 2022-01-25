import {Game} from "./game.model";

export class GamesPerDate {
  games: Game[];
  date: string;

  public constructor(init?: Partial<GamesPerDate>) {
    Object.assign(this, init);
  }
}
