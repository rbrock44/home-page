export class Match {
  home: string;
  away: string;
  finalScore: string;
  sport: string;
  arena: string;
  city: string;
  date: string;
  attendees: string[];
  price?: number;

  public constructor(home: string, away: string, finalScore: string, sport: string, arena: string, city: string, date: string, attendees: string[], price?: number) {
    this.home = home;
    this.away = away;
    this.finalScore = finalScore;
    this.sport = sport;
    this.arena = arena;
    this.city = city;
    this.date = date;
    this.attendees = attendees;
    this.price = price;
  }
}
