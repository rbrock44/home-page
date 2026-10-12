import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleEvent } from 'src/app/models/single-event.model';
import { FightCard } from "../../models/fight-card.model";
import { GamesPerDate } from "../../models/games-per-date.model";
import { HomeApiService } from "../../services/home-api.service";
import { SettingsService } from "../../services/settings.service";
import { WindowService } from '../../services/window.service';
import { Auction } from 'src/app/models/auction.model';
import { SpotPrice } from 'src/app/models/spot-price.model';
import { GDQ_EVENTS } from 'src/app/constants/constants-gdq';
import { MediaSearchWidgetComponent } from '../../components/media-search-widget/media-search-widget.component';
import { NgStyle } from '@angular/common';
import { SportWidgetComponent } from '../../components/sport-widget/sport-widget.component';
import { MmaWidgetComponent } from '../../components/mma-widget/mma-widget.component';
import { AuctionWidgetComponent } from '../../components/auction-widget/auction-widget.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MediaSearchWidgetComponent, NgStyle, SportWidgetComponent, MmaWidgetComponent, AuctionWidgetComponent]
})
export class HomeComponent implements OnInit, OnDestroy {
  basketball: GamesPerDate = new GamesPerDate();
  football: GamesPerDate = new GamesPerDate();
  mma: FightCard = new FightCard();
  auctions: Auction[] = [];
  spotPrices: SpotPrice = new SpotPrice();
  gdqEvents: SingleEvent[] = GDQ_EVENTS;
  refreshCount = 0;
  title: string = '';
  private refreshTimer: number | undefined;
  private settingsResetSubscription: Subscription | undefined;
  private stopWatchingVisibility: () => void = () => undefined;

  constructor(
    public homeApiService: HomeApiService,
    public settingsService: SettingsService,
    private windowService: WindowService,
  ) {
  }

  ngOnInit() {
    // live data and the refresh timer are browser-only; the prerendered page is just the shell
    if (!this.windowService.isBrowser) {
      return;
    }

    this.startUp()
    this.settingsResetSubscription = this.settingsService.settingsReset.subscribe(() => {
      this.startUp()
    });
    // no point refreshing a background tab; catch up as soon as it's looked at again
    this.stopWatchingVisibility = this.windowService.onVisibilityChange(hidden => {
      hidden ? this.pauseRefresh() : this.startUp();
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

    // a settings reset restarts the loop, possibly at a new rate, so drop the old one first
    this.windowService.clearInterval(this.refreshTimer);
    this.refreshTimer = this.windowService.setInterval(() => {
      this.startUp(false);
      this.refreshCount++;
    }, timeout);
  }

  pauseRefresh(): void {
    this.windowService.clearInterval(this.refreshTimer);
    this.refreshTimer = undefined;
  }

  ngOnDestroy(): void {
    this.windowService.clearInterval(this.refreshTimer);
    this.stopWatchingVisibility();
    this.settingsResetSubscription?.unsubscribe();
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
    });

    this.homeApiService.getSpotPrices().subscribe(prices => {
      this.spotPrices = prices;
    });
  }

  formatSpotPrice(pricePerToz: number): string {
    const pricePerGram = pricePerToz / 31.1035; // 1 troy ounce = 31.1035 grams
    return `${pricePerToz.toFixed(2)}/toz ${pricePerGram.toFixed(2)}/g`;
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
