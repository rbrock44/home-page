import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {FightCard} from "../../models/fight-card.model";
import {HomeApiService} from "../../services/home-api.service";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from '../../models/game.model';
import {Fight} from '../../models/fight.model';

@Component({
  selector: 'app-home-page',
  template: `
    <div>
      <div class="header-div">
        <header data-header-title>{{this.settingsService.title}}</header>
      </div>

      <div data-content-div>
        <div class="sport-ctn"
             *ngIf="this.settingsService.showBasketball && whichGamesPerDateCheck(0, 0, 1)?.games?.length > 0">
          <div class="sport-title">Basketball</div>
          <div class="sport-game-ctn">
            <span class="date-label">{{whichGamesPerDateCheck(0, 0, 1).date}}</span>
            <div *ngFor="let game of whichGamesPerDateCheck(0, 0, 1).games">
              <div class="game-label">
                <div (click)="imgClick(game, false)" class="cursor">
                  <span class="at-label column" *ngIf="game.opponentImageLink">
                    <img src="{{game.opponentImageLink}}" alt="Visiting Team Image" (click)="imgClick(game, false)">
                  </span>
                  <span class="away-label column">{{this.trimTeam(game.opponent)}}</span>
                </div>
                <span class="at-label column">@</span>
                <div (click)="imgClick(game)" class="cursor">
                  <span class="at-label column" *ngIf="game.homeImageLink" (click)="imgClick(game)">
                    <img src="{{game.homeImageLink}}" alt="Home Team Image">
                  </span>
                  <span class="home-label column">{{this.trimTeam(game.home)}}</span>
                </div>
                <span class="time-label column">{{this.liveTime(game.time)}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sport-ctn"
             *ngIf="this.settingsService.showFootball && whichGamesPerDateCheck(1, 2, 3)?.games?.length > 0">
          <div class="sport-title">Football</div>
          <div class="sport-game-ctn">
            <div class="date-label">{{whichGamesPerDateCheck(1, 2, 3).date}}</div>
            <div *ngFor="let game of whichGamesPerDateCheck(1, 2, 3).games">
              <div class="game-label">
                <div (click)="imgClick(game, false)" class="cursor">
                  <span class="at-label column" *ngIf="game.opponentImageLink">
                    <img src="{{game.opponentImageLink}}" alt="Visiting Team Image">
                  </span>
                  <span class="away-label column">{{this.trimTeam(game.opponent)}}</span>
                </div>
                <span class="at-label column">@</span>
                <div (click)="imgClick(game)" class="cursor">
                  <span class="at-label column" *ngIf="game.homeImageLink">
                    <img src="{{game.homeImageLink}}" alt="Home Team Image" (click)="imgClick(game)">
                  </span>
                  <span class="home-label column">{{this.trimTeam(game.home)}}</span>
                </div>
                <span class="time-label column">{{this.formatTime(game.time)}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sport-ctn" *ngIf="this.settingsService.showMma && whichFightCardCheck(4, 5)?.main?.length > 0">
          <div class="sport-title">MMA</div>
          <div class="sport-game-ctn">
            <div class="date-label">{{whichFightCardCheck(4, 5).date}}</div>

            <!--            MAIN CARD-->
            <div class="date-label">
              Main Card
            </div>
            <div *ngFor="let fight of whichFightCardCheck(4, 5).main">
              <div class="game-label cursor"
                   [ngStyle]="fight.titleFight && {'background-color': 'gold'}"
                   (click)="fightClick(fight)"
              >
                <span class="person-label column right">{{this.getPerson(fight.title)}}</span>
                <span class="at-label column">vs.</span>
                <span class="person-label column">{{this.getPerson(fight.title, false)}}</span>
              </div>
            </div>

            <!--            UNDER CARD-->
            <div class="date-label" *ngIf="whichFightCardCheck(4, 5).under?.length > 0">
              Under Card
            </div>
            <div *ngFor="let fight of whichFightCardCheck(4, 5).under">
              <div class="game-label cursor" (click)="fightClick(fight)">
                <span class="person-label column right">{{this.getPerson(fight.title)}}</span>
                <span class="at-label column">vs.</span>
                <span class="person-label column">{{this.getPerson(fight.title, false)}}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sports = [
    {
      name: 'Basketball Today',
      gamePerDate: new GamesPerDate(),
      fightCard: null,
    },
    {
      name: 'Basketball Upcoming',
      gamePerDate: new GamesPerDate(),
      fightCard: null,
    },
    {
      name: 'Football Today',
      gamePerDate: new GamesPerDate(),
      fightCard: null,
    },
    {
      name: 'Football Upcoming',
      gamePerDate: new GamesPerDate(),
      fightCard: null,
    },
    {
      name: 'MMA Today',
      gamePerDate: null,
      fightCard: new FightCard(),
    },
    {
      name: 'MMA Today',
      gamePerDate: null,
      fightCard: new FightCard(),
    }
  ]
  title: string = '';

  constructor(
    public homeApiService: HomeApiService,
    public settingsService: SettingsService
  ) {
  }

  ngOnInit() {
    this.startUp()
    this.settingsService.settingsReset.subscribe(() => {
      this.startUp()
    });
  }

  startUp(doLoop: boolean = true): void {
    this.settingsService.readLocalStorage();
    this.getSubscriptionsStarted();
    doLoop ? this.setTimerLoop() : null;
  }

  setTimerLoop(): void {
    // 1 min = 60k milliseconds
    let timeout = this.settingsService.refreshRate * 60000
    window.setInterval(() => {
      this.startUp(false)
    }, timeout);
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }

  getSubscriptionsStarted(): void {
    this.homeApiService.getBasketballToday().subscribe(games => {
      this.sports[0].gamePerDate = games;
    });
    this.homeApiService.getBasketballUpcoming().subscribe(games => {
      this.sports[1].gamePerDate = games;
    });
    this.homeApiService.getFootballToday().subscribe(games => {
      this.sports[2].gamePerDate = games;
    });
    this.homeApiService.getFootballUpcoming().subscribe(games => {
      this.sports[3].gamePerDate = games;
    });
    this.homeApiService.getMmaToday().subscribe(card => {
      this.sports[4].fightCard = card;
    });
    this.homeApiService.getMmaUpcoming().subscribe(card => {
      this.sports[5].fightCard = card;
    });
  }

  imgClick(game: Game, isHome: boolean = true): void {
    let url = isHome ? game.homeTeamLink : game.opponentTeamLink
    window.open(url, "_blank");
  }

  fightClick(fight: Fight): void {
    window.open(fight.link, "_blank");
  }

  getImage(game: Game, isHome: boolean = true): String {
    return isHome ? game.home : game.opponentImageLink;
  }

  trimTeam(team: string): string {
    let value = team.substring(team.lastIndexOf(" ") + 1);
    if (value.toUpperCase() === 'TEAM') {
      value = 'Washington';
    } else if (value.toUpperCase() === 'BLAZERS') {
      value = 'Tail Blazers';
    }
    return value;
  }

  getPerson(title: string, firstPerson: boolean = true): string {
    if (title == undefined || title.length == 0) {
      return "";
    } else if (firstPerson) {
      return title.substring(0, title.indexOf("vs") - 1).trim()
    } else {
      return title.substring(title.indexOf("vs") + 3).trim()
    }
  }

  formatTime(time: string): string {
    const d = new Date(time);
    if (time.length > 0 && d.toString() !== 'Invalid Date') {
      let hours = d.getHours();
      let m = 'AM';
      if (hours > 12) {
        hours -= 12;
        m = 'PM';
      }
      return `${hours}:${d.getMinutes()} ${m}`
    } else {
      return this.liveTime(time);
    }
  }

  liveTime(time: string): string {
    if (time.length > 0) {
      return time;
    } else {
      return 'LIVE'
    }

  }

  whichGamesPerDateCheck(whichIndex: number, firstIndex: number, secondIndex: number): GamesPerDate {
    let whichSport: boolean = this.settingsService.whichBasketball;
    if (whichIndex == 1) {
      whichSport = this.settingsService.whichFootball
    }

    return whichSport ?
      this.sports[firstIndex].gamePerDate :
      this.sports[secondIndex].gamePerDate
  }

  whichFightCardCheck(firstIndex: number, secondIndex: number): FightCard {
    let whichSport: boolean = this.settingsService.whichMma;

    return whichSport ?
      this.sports[firstIndex].fightCard :
      this.sports[secondIndex].fightCard
  }
}
