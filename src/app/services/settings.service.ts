import {DOCUMENT, inject, Injectable, signal} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {
  BUTTON_LIGHT_TEXT_COLORS,
  COLOR_DEFAULT,
  REFRESH_RATE_DEFAULT,
  SHOW_LINKS_DEFAULT,
  SHOW_SPORTS_DEFAULT,
  TITLE_DEFAULT,
  toBoolean,
  TODAY,
  UPCOMING,
  WHICH_SELECTION_DEFAULT,
} from "../constants/constants";
import {Item} from "../models/item.model";
import {WindowService} from "./window.service";

interface Settings {
  title: string;
  showBasketball: boolean;
  showFootball: boolean;
  showMma: boolean;
  showAuctions: boolean;
  showLinks: boolean;
  whichBasketball: boolean;
  whichFootball: boolean;
  whichMma: boolean;
  refreshRate: number;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _settingsResetSubject: Subject<boolean> = new Subject<boolean>();
  private document = inject(DOCUMENT);

  // a signal, so every view reading these getters re-renders when a setting changes
  private readonly settings = signal<Settings>(this.storedSettings());

  get title(): string { return this.settings().title; }
  get showBasketball(): boolean { return this.settings().showBasketball; }
  get showFootball(): boolean { return this.settings().showFootball; }
  get showMma(): boolean { return this.settings().showMma; }
  get showAuctions(): boolean { return this.settings().showAuctions; }
  get showLinks(): boolean { return this.settings().showLinks; }
  get whichBasketball(): boolean { return this.settings().whichBasketball; }
  get whichFootball(): boolean { return this.settings().whichFootball; }
  get whichMma(): boolean { return this.settings().whichMma; }
  get refreshRate(): number { return this.settings().refreshRate; }
  get color(): string { return this.settings().color; }

  // read once on load; router navigation drops query params
  showPrices: boolean;

  TODAY: string = TODAY;
  UPCOMING: string = UPCOMING;

  constructor(
    private windowService: WindowService,
  ) {
    this.readFromLocalStorage();
    this.showPrices = this.windowService.hasQueryParam('prices');
  }

  get settingsReset(): Observable<boolean> {
    return this._settingsResetSubject;
  }

  setColor(value: string): void {
    this.patch({color: value});
    this.saveColorToLocalStorage();
    const root = this.document.documentElement;
    let buttonValue: string = value + 40;
    let backgroundValue: string = value + 60;
    root.style.setProperty('--buttonColor', `var(${buttonValue})`);
    root.style.setProperty('--backgroundColor', `var(${backgroundValue})`);
    root.style.setProperty('--buttonTextColor', BUTTON_LIGHT_TEXT_COLORS.has(value) ? '#f2f7f5' : '#06302e');
  }

  updateSetting(setting: Partial<Omit<Settings, 'color'>>): void {
    this.patch(setting);
    this.saveToLocalStorage();
  }

  applySettings(
    refreshRate: number,
    showSports: boolean[],
    whichSelection: boolean[],
    title: string,
    showLinks: boolean,
  ) {
    this.patch({
      title,
      refreshRate,
      showBasketball: showSports[0],
      showFootball: showSports[1],
      showMma: showSports[2],
      showAuctions: showSports[3],
      whichBasketball: whichSelection[0],
      whichFootball: whichSelection[1],
      whichMma: whichSelection[2],
      showLinks,
    });

    this.saveToLocalStorage();
  }

  resetEverything(): void {
    this.windowService.clearStorage();

    this.patch({
      showBasketball: SHOW_SPORTS_DEFAULT,
      showFootball: SHOW_SPORTS_DEFAULT,
      showMma: SHOW_SPORTS_DEFAULT,
      showAuctions: SHOW_SPORTS_DEFAULT,
      whichBasketball: WHICH_SELECTION_DEFAULT,
      whichFootball: WHICH_SELECTION_DEFAULT,
      whichMma: WHICH_SELECTION_DEFAULT,
      showLinks: SHOW_LINKS_DEFAULT,
      refreshRate: REFRESH_RATE_DEFAULT,
      title: TITLE_DEFAULT,
    });
    this.setColor(COLOR_DEFAULT);

    this.saveToLocalStorage();

    this._settingsResetSubject.next(true);
  }

  public readLocalStorage(): void {
    this.readFromLocalStorage();
  }

  private readFromLocalStorage(): void {
    const stored = this.storedSettings();
    this.settings.set(stored);
    this.setColor(stored.color);
  }

  private storedSettings(): Settings {
    return {
      title: this.windowService.getItem('home-page-title', TITLE_DEFAULT),
      refreshRate: +this.windowService.getItem('home-page-refresh-rate', REFRESH_RATE_DEFAULT),
      showBasketball: toBoolean(this.windowService.getItem('home-page-show-basketball', SHOW_SPORTS_DEFAULT)),
      showFootball: toBoolean(this.windowService.getItem('home-page-show-football', SHOW_SPORTS_DEFAULT)),
      showMma: toBoolean(this.windowService.getItem('home-page-show-mma', SHOW_SPORTS_DEFAULT)),
      showAuctions: toBoolean(this.windowService.getItem('home-page-show-auctions', SHOW_SPORTS_DEFAULT)),
      showLinks: toBoolean(this.windowService.getItem('home-page-show-links', SHOW_LINKS_DEFAULT)),
      whichBasketball: toBoolean(this.windowService.getItem('home-page-which-basketball', WHICH_SELECTION_DEFAULT)),
      whichFootball: toBoolean(this.windowService.getItem('home-page-which-football', WHICH_SELECTION_DEFAULT)),
      whichMma: toBoolean(this.windowService.getItem('home-page-which-mma', WHICH_SELECTION_DEFAULT)),
      color: this.windowService.getItem('home-page-color', COLOR_DEFAULT),
    };
  }

  private patch(changes: Partial<Settings>): void {
    this.settings.update(current => ({...current, ...changes}));
  }

  private saveToLocalStorage(): void {
    [
      new Item('home-page-show-basketball', this.showBasketball.toString()),
      new Item('home-page-show-football', this.showFootball.toString()),
      new Item('home-page-show-mma', this.showMma.toString()),
      new Item('home-page-show-auctions', this.showAuctions.toString()),
      new Item('home-page-show-links', this.showLinks.toString()),
      new Item('home-page-which-basketball', this.whichBasketball.toString()),
      new Item('home-page-which-football', this.whichFootball.toString()),
      new Item('home-page-which-mma', this.whichMma.toString()),
      new Item('home-page-title', this.title),
      new Item('home-page-refresh-rate', this.refreshRate.toString())
    ].forEach(item => {
      this.windowService.setItem(item);
    })
    this.saveColorToLocalStorage();
  }

  private saveColorToLocalStorage(): void {
    this.windowService.setItem(new Item('home-page-color', this.color))
  }
}
