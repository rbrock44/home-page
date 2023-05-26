import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, Subject, from, of } from 'rxjs'
import { environment } from 'src/environments/environment'
import { FightCard } from '../models/fight-card.model'
import { GamesPerDate } from "../models/games-per-date.model";
import { Event } from '../models/event.model'

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  homeUrl: string = environment.homePageApiUrl
  gamesPerDate = 'games-per-date/'
  fightCard = 'fight-card'

  basketballGames = new Subject<GamesPerDate>();

  constructor(
    private http: HttpClient
  ) {
  }

  searchMedia(criteria: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.homeUrl}/home-media-search?criteria=${criteria}`);
  }

  refreshMedia(): Observable<void> {
    return this.http.get<void>(`${this.homeUrl}/media/update`);
  }

  getBasketballToday(): Observable<GamesPerDate> {
    return this.http.get<GamesPerDate>(this.getBasketballUrl());
  }

  getBasketballUpcoming(): Observable<GamesPerDate> {
    return this.http.get<GamesPerDate>(this.getBasketballUrl(false))
  }

  getFootballToday(): Observable<GamesPerDate> {
    return this.http.get<GamesPerDate>(this.getFootballUrl());
  }

  getFootballUpcoming(): Observable<GamesPerDate> {
    return this.http.get<GamesPerDate>(this.getFootballUrl(false));
  }

  getMmaToday(): Observable<FightCard> {
    return this.http.get<FightCard>(this.getMmaUrl());
  }

  getMmaUpcoming(): Observable<FightCard> {
    return this.http.get<FightCard>(this.getMmaUrl(false));
  }

  getGdqUpcoming(): Observable<Event> {
    return this.http.get<Event>(`${this.homeUrl}/gdq/upcoming`);
  }

  private getBasketballUrl(today: boolean = true): string {
    return this.getUrl('basketball', today)
  }

  private getFootballUrl(today: boolean = true): string {
    return this.getUrl('football', today)
  }

  private getMmaUrl(today: boolean = true): string {
    return `${this.homeUrl}/${this.fightCard}/` + (today ? 'today' : 'upcoming')
  }

  private getUrl(sport: string, today: boolean = true): string {
    return `${this.homeUrl}/${this.gamesPerDate}${sport}/` + (today ? 'today' : 'upcoming')
  }
}
