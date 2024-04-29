export class Match {
  home: string;
  away: string;
  finalScore: string;
  sport: string;
  location: string;
  city: string;
  date: string;
  attendees: string[];

  public constructor(home: string, away: string, finalScore: string, sport: string, location: string, city: string, date: string, attendees: string[]) {
    this.home = home;
    this.away = away;
    this.finalScore = finalScore;
    this.sport = sport;
    this.location = location;
    this.city = city;
    this.date = date;
    this.attendees = attendees;
  }

  static getValue(column: string, match: Match): any {
    return match[column]
  }
}
