import {Injectable, OnDestroy} from '@angular/core';
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
  Pages
} from "../constants/constants";
import {Item} from "../models/item.model";
import {WindowService} from "./window.service";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnDestroy {
  private _settingsResetSubject: Subject<boolean> = new Subject<boolean>();

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

  TODAY: string = TODAY;
  UPCOMING: string = UPCOMING;

  // this show array controls which page is showed at a time
  // 1st: Home
  // 2nd: Settings
  // 3rd: Links
  // 4th: Concerts
  // 5th: Matches
  show = [true, false, false, false, false];

  constructor(
    private windowService: WindowService,
    private location: Location,
  ) {
    this.readFromLocalStorage();
    // Browser/mouse back and forward land here; show whichever page the URL now names.
    this.location.subscribe(() => this.setShow(this.readPageFromUrl() ?? Pages.Home));
  }

  ngOnDestroy(): void {
    this.saveToLocalStorage();
  }

  get settingsReset(): Observable<boolean> {
    return this._settingsResetSubject;
  }

  setShow(index: number): void {
    this.show = [false, false, false, false];
    this.show[index] = true;
  }

  setShowWithUrlParam(param: string): void {
    const index = Pages[param];
    this.setShow(index);
  }

  /** Shows a page as a new history entry so browser/mouse back returns to the previous page. */
  navigateTo(index: number): void {
    if (this.show[index]) {
      return;
    }

    this.setShow(index);
    this.location.go(this.buildPageUrl(index));
  }

  /**
   * Shows the page named in the URL on load. A Home entry is slotted in underneath a deep
   * link so browser/mouse back lands on Home instead of leaving the site.
   */
  restorePageFromUrl(): void {
    const index = this.readPageFromUrl();
    if (index === null || index === Pages.Home) {
      return;
    }

    this.location.replaceState(this.buildPageUrl(Pages.Home));
    this.navigateTo(index);
  }

  private readPageFromUrl(): number | null {
    const query = this.location.path().split('?')[1] ?? '';
    const index = Pages[new URLSearchParams(query).get('page') as keyof typeof Pages];
    return index === undefined ? null : index;
  }

  private buildPageUrl(index: number): string {
    const urlParam = Pages[index];
    if (index === Pages.Home) {
      return `${location.pathname}`;
    }

    const queryParams = new URLSearchParams();
    queryParams.set('page', urlParam);
    return `${location.pathname}?${queryParams.toString()}`;
  }

  setColor(value: string): void {
    this.color = value;
    this.saveColorToLocalStorage();
    const root = document.documentElement;
    let buttonValue: string = value + 40;
    let backgroundValue: string = value + 60;
    root.style.setProperty('--buttonColor', `var(${buttonValue})`);
    root.style.setProperty('--backgroundColor', `var(${backgroundValue})`);
    root.style.setProperty('--buttonTextColor', BUTTON_LIGHT_TEXT_COLORS.has(value) ? '#f2f7f5' : '#06302e');
  }

  updateSetting(setting: Partial<Pick<SettingsService,
    'title' | 'refreshRate' | 'showBasketball' | 'showFootball' | 'showMma' | 'showAuctions' | 'showLinks' |
    'whichBasketball' | 'whichFootball' | 'whichMma'>>): void {
    Object.assign(this, setting);
    this.saveToLocalStorage();
  }

  applySettings(
    refreshRate: number,
    showSports: boolean[],
    whichSelection: boolean[],
    title: string,
    showLinks: boolean,
  ) {
    this.title = title;
    this.refreshRate = refreshRate;

    this.showBasketball = showSports[0];
    this.showFootball = showSports[1];
    this.showMma = showSports[2];
    this.showAuctions = showSports[3];
    this.whichBasketball = whichSelection[0];
    this.whichFootball = whichSelection[1];
    this.whichMma = whichSelection[2];
    this.showLinks = showLinks;

    this.saveToLocalStorage();
  }

  resetEverything(): void {
    window.localStorage.clear();

    this.showBasketball = SHOW_SPORTS_DEFAULT;
    this.showFootball = SHOW_SPORTS_DEFAULT;
    this.showMma = SHOW_SPORTS_DEFAULT;
    this.showAuctions = SHOW_SPORTS_DEFAULT;
    this.whichBasketball = WHICH_SELECTION_DEFAULT;
    this.whichFootball = WHICH_SELECTION_DEFAULT;
    this.whichMma = WHICH_SELECTION_DEFAULT;
    this.showLinks = SHOW_LINKS_DEFAULT;
    this.refreshRate = REFRESH_RATE_DEFAULT;

    this.title = TITLE_DEFAULT;
    this.setColor(COLOR_DEFAULT);

    this.saveToLocalStorage();

    this._settingsResetSubject.next(true);
  }

  public readLocalStorage(): void {
    this.readFromLocalStorage();
  }

  private readFromLocalStorage(): void {
    this.title = this.windowService.getItem('home-page-title', TITLE_DEFAULT);
    this.refreshRate = +this.windowService.getItem('home-page-refresh-rate', REFRESH_RATE_DEFAULT);

    this.showBasketball = toBoolean(this.windowService.getItem('home-page-show-basketball', SHOW_SPORTS_DEFAULT));
    this.showFootball = toBoolean(this.windowService.getItem('home-page-show-football', SHOW_SPORTS_DEFAULT));
    this.showMma = toBoolean(this.windowService.getItem('home-page-show-mma', SHOW_SPORTS_DEFAULT));
    this.showAuctions = toBoolean(this.windowService.getItem('home-page-show-auctions', SHOW_SPORTS_DEFAULT));
    this.showLinks = toBoolean(this.windowService.getItem('home-page-show-links', SHOW_LINKS_DEFAULT));
    this.whichBasketball = toBoolean(this.windowService.getItem('home-page-which-basketball', WHICH_SELECTION_DEFAULT));
    this.whichFootball = toBoolean(this.windowService.getItem('home-page-which-football', WHICH_SELECTION_DEFAULT));
    this.whichMma = toBoolean(this.windowService.getItem('home-page-which-mma', WHICH_SELECTION_DEFAULT));

    this.setColor(this.windowService.getItem('home-page-color', COLOR_DEFAULT));
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
