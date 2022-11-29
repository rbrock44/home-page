import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {FightCard} from "../../models/fight-card.model";
import {HomeApiService} from "../../services/home-api.service";
import {GamesPerDate} from "../../models/games-per-date.model";

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
    const value = (() => {
      this.startUp(false);
      this.refreshCount++;
    })
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
}
