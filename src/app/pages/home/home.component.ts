import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {FightCard} from "../../models/fight-card.model";
import {HomeApiService} from "../../services/home-api.service";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from '../../models/game.model';
import {Fight} from '../../models/fight.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  basketball: GamesPerDate = new GamesPerDate();
  football: GamesPerDate = new GamesPerDate();
  mma: FightCard = new FightCard();
  refreshCount = 0;
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
      this.startUp(false);
      this.refreshCount++;
    }, timeout);
  }

  ngOnDestroy(): void {
    this.settingsService.ngOnDestroy();
  }

  getSubscriptionsStarted(): void {
    if (this.settingsService.whichBasketball) {
      this.homeApiService.getBasketballToday().subscribe(games => {
        this.basketball = games;
      });
    } else {
      this.homeApiService.getBasketballUpcoming().subscribe(games => {
        this.basketball = games;
      });
    }

    if (this.settingsService.whichFootball) {
      this.homeApiService.getFootballToday().subscribe(games => {
        this.football = games;
      });
    } else {
      this.homeApiService.getFootballUpcoming().subscribe(games => {
        this.football = games;
      });
    }

    if (this.settingsService.whichMma) {
      this.homeApiService.getMmaToday().subscribe(mma => {
        this.mma = mma;
      });
    } else {
      this.homeApiService.getMmaUpcoming().subscribe(mma => {
        this.mma = mma;
      });
    }
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
//     let value = team.substring(team.lastIndexOf(" ") + 1);
//     if (value.toUpperCase() === 'TEAM') {
//       value = 'Washington';
//     } else if (value.toUpperCase() === 'BLAZERS') {
//       value = 'Tail Blazers';
//     }
    return team;
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
}
