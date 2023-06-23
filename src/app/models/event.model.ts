export class Event {
  name: string[];
  dates: string[];
  url: string;

  public constructor(init?: Partial<Event>) {
    Object.assign(this, init);
  }
}
