export class Match {
  home: string;
  away: string;
  finalScore: string;
  sport: string;
  arena: string;
  city: string;
  date: string;
  attendees: string[];

  public constructor(home: string, away: string, finalScore: string, sport: string, arena: string, city: string, date: string, attendees: string[]) {
    this.home = home;
    this.away = away;
    this.finalScore = finalScore;
    this.sport = sport;
    this.arena = arena;
    this.city = city;
    this.date = date;
    this.attendees = attendees;
  }

  static getValue(column: string, match: Match): any {
    return match[column]
  }
}
