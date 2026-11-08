import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, shareReplay, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Auction } from '../models/auction.model'
import { FightCard } from '../models/fight-card.model'
import { GamesPerDate } from "../models/games-per-date.model"
import { SpotPrice } from '../models/spot-price.model'

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  homeUrl: string = environment.homePageApiUrl
  gamesPerDate = 'games-per-date/'
  fightCard = 'fight-card'
  // adjacent game days only change by the minute for live games, so keep them for as long as the app is open
  private gameDayCache = new Map<string, Observable<GamesPerDate>>()

  constructor(
    private http: HttpClient
  ) {
  }

  searchMedia(criteria: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.homeUrl}/home-media-search?criteria=${encodeURIComponent(criteria)}`);
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

  getAdjacentGameDay(isBasketball: boolean, day: string, forward: boolean): Observable<GamesPerDate> {
    const sport = isBasketball ? 'basketball' : 'football'
    const url = `${this.homeUrl}/${this.gamesPerDate}${sport}/${forward ? 'next' : 'previous'}?day=${encodeURIComponent(day)}`

    let cached = this.gameDayCache.get(url)
    if (!cached) {
      cached = this.http.get<GamesPerDate>(url).pipe(
        // a failed call shouldn't stick - let the next click try again
        catchError(error => {
          this.gameDayCache.delete(url)
          return throwError(() => error)
        }),
        shareReplay(1)
      )
      this.gameDayCache.set(url, cached)
    }
    return cached
  }

  getMmaToday(): Observable<FightCard> {
    return this.http.get<FightCard>(this.getMmaUrl());
  }

  getMmaUpcoming(): Observable<FightCard> {
    return this.http.get<FightCard>(this.getMmaUrl(false));
  }

  getAuctionsUpcoming(): Observable<Auction[]> {
    return this.http.get<Auction[]>(`${this.homeUrl}/auction/upcoming`);
  }

  getSpotPrices(): Observable<SpotPrice> {
    return this.http.get<SpotPrice>(`${this.homeUrl}/spot-price`);
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
