export class Concert {
  name: string;
  openers: string[];
  location: string;
  city: string;
  date: string;
  attendees: string[];
  price?: number;

  public constructor(name: string, openers: string[], location: string, city: string, date: string, attendees: string[], price?: number) {
    this.name = name;
    this.openers = openers;
    this.location = location;
    this.city = city;
    this.date = date;
    this.attendees = attendees;
    this.price = price;
  }

  static getValue<K extends keyof Concert>(column: K, concert: Concert): Concert[K] {
    return concert[column]
  }
}
