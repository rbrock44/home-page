export class Auction {
  service: string;
  name: string;
  internetBidding: boolean;
  url: string;
  startDate: string;
  endDate: string;
  location: string;
  closingTime: string;
  note: string;

  constructor(init?: Partial<Auction>) {
    Object.assign(this, init);
  }
}
