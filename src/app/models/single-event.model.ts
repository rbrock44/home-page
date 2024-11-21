export class SingleEvent {
  name: string;
  startDate: string;
  endDate: string;
  url: string;

  public constructor(init?: Partial<SingleEvent>) {
    Object.assign(this, init);
  }
}
