import { Component, OnDestroy, OnInit } from '@angular/core';
import { SingleEvent } from 'src/app/models/single-event.model';
import { FightCard } from "../../models/fight-card.model";
import { GamesPerDate } from "../../models/games-per-date.model";
import { HomeApiService } from "../../services/home-api.service";
import { SettingsService } from "../../services/settings.service";
import { WindowService } from '../../services/window.service';
import { Auction } from 'src/app/models/auction.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  basketball: GamesPerDate = new GamesPerDate();
  football: GamesPerDate = new GamesPerDate();
  mma: FightCard = new FightCard();
  auctions: Auction[] = [];
  gdqEvents: SingleEvent[] = [
    new SingleEvent({
      name: 'Disaster Relief Done Quick 2024',
      startDate: '20241011',
      endDate: '20241013',
      url: 'https://gamesdonequick.com/marathons/cm06694cj010zw401cwatx1zo',
    }),
    new SingleEvent({
      name: 'AGDQ25',
      startDate: '20250105',
      endDate: '20250112',
      url: 'https://gamesdonequick.com/marathons/cm06694cj010zw401cwatx1zo',
    })
  ];
  refreshCount = 0;
  title: string = '';

  constructor(
    public homeApiService: HomeApiService,
    public settingsService: SettingsService,
    private windowService: WindowService
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
    const basketball = this.settingsService.whichBasketball ?
      this.homeApiService.getBasketballToday() :
      this.homeApiService.getBasketballUpcoming()

    basketball.subscribe(games => {
      this.basketball = games;
    });

    const football = this.settingsService.whichFootball ?
      this.homeApiService.getFootballToday() :
      this.homeApiService.getFootballUpcoming()

    football.subscribe(games => {
      this.football = games;
    });

    const mma = this.settingsService.whichMma ?
      this.homeApiService.getMmaToday() :
      this.homeApiService.getMmaUpcoming()

    mma.subscribe(fightCard => {
      this.mma = fightCard;
    });

    this.homeApiService.getAuctionsUpcoming().subscribe(auctions => {
      this.auctions = auctions;
      console.log('AUCTIONS: ', this.auctions);
    });
  }

  gdqClick(url: string): void {
    this.windowService.openBlank(url);
  }

  gdqHighlight(event: SingleEvent): boolean {
    const currentDate = new Date();
    const startDate = this.parseDate(event.startDate);
    const endDate = this.parseDate(event.endDate);

    // Check if the current date is within the range of startDate and endDate
    return currentDate >= startDate && currentDate <= endDate;
  }

  upcomingOrOngoingEvents(): SingleEvent[] {
    const currentDate = new Date();

    return this.gdqEvents.filter(event => {
      const endDate = this.parseDate(event.endDate);
      return currentDate <= endDate; // Show events that are ongoing or in the future
    });
  }

  parseDate(dateStr: string): Date {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const month = parseInt(dateStr.substring(4, 6), 10) - 1;
    const day = parseInt(dateStr.substring(6, 8), 10);
    return new Date(year, month, day);
  }

  public formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  }
}
