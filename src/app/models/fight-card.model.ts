import {Fight} from "./fight.model";

export class FightCard {
  main: Fight[];
  under: Fight[];
  date: string;
  title: string;
  titleLink: string;

  public constructor(init?: Partial<FightCard>) {
    Object.assign(this, init);
  }
}
