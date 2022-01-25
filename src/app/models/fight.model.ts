export class Fight {
  title: string;
  link: string;
  titleFight: boolean;

  public constructor(init?: Partial<Fight>) {
    Object.assign(this, init);
  }
}
