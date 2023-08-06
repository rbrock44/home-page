export class Concert {
  name: string;
  openers: string[];
  location: string;
  city: string;
  date: string;
  attendees: string[];

  public constructor(name: string, openers: string[], location: string, city: string, date: string, attendees: string[]) {
    this.name = name;
    this.openers = openers;
    this.location = location;
    this.city = city;
    this.date = date;
    this.attendees = attendees;
  }

  static getValue(column: string, recipe: Concert): any {
    return recipe[column]
  }
}
