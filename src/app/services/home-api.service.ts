import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from 'src/environments/environment'
import {FightCard} from '../models/fight-card.model'
import {GamesPerDate} from "../models/games-per-date.model";

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  homeUrl: string = environment.homePageApiUrl
  gamesPerDate = 'games-per-date/'
  fightCard = 'fight-card'

  constructor(
    private http: HttpClient
  ) {
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
