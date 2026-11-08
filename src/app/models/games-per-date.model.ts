import {Game} from "./game.model";

export class GamesPerDate {
  games?: Game[];
  date?: string;
  // yyyyMMdd of the games, used to page to the next/previous game day
  day?: string;

  public constructor(init?: Partial<GamesPerDate>) {
    Object.assign(this, init);
  }
}
