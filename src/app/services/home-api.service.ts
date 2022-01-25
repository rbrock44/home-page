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
  fightCard = 'fight-card/'

  constructor(
    private http: HttpClient
  ) {
  }

  getBasketballToday(): Observable<GamesPerDate> {
    var url = `${this.gamesPerDate}basketball/today`
    return this.http.get<GamesPerDate>(this.homeUrl + url)
  }

  getBasketballUpcoming(): Observable<GamesPerDate> {
    var url = `${this.gamesPerDate}basketball/upcoming`
    return this.http.get<GamesPerDate>(this.homeUrl + url)
  }

  getFootballToday(): Observable<GamesPerDate> {
    var url = `${this.gamesPerDate}football/today`
    return this.http.get<GamesPerDate>(this.homeUrl + url)
  }

  getFootballUpcoming(): Observable<GamesPerDate> {
    var url = `${this.gamesPerDate}football/upcoming`
    return this.http.get<GamesPerDate>(this.homeUrl + url)
  }

  getMmaToday(): Observable<FightCard> {
    var url = `${this.fightCard}today`
    return this.http.get<FightCard>(this.homeUrl + url)
  }

  getMmaUpcoming(): Observable<FightCard> {
    var url = `${this.fightCard}upcoming`
    return this.http.get<FightCard>(this.homeUrl + url)
  }
}
