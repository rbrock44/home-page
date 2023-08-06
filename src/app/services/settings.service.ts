import {Injectable, OnDestroy} from '@angular/core';
import * as _ from 'lodash';
import {Observable, Subject} from 'rxjs';
import {
  COLOR_DEFAULT,
  REFRESH_RATE_DEFAULT,
  SHOW_SPORTS_DEFAULT,
  TITLE_DEFAULT,
  toBoolean,
  TODAY,
  UPCOMING,
  WHICH_SELECTION_DEFAULT
} from "../constants/constants";
import {Item} from "../models/item.model";
import {WindowService} from "./window.service";

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnDestroy {
  private _settingsResetSubject: Subject<boolean> = new Subject<boolean>();

  title: string;
  showBasketball: boolean;
  showFootball: boolean;
  showMma: boolean;
  whichBasketball: boolean;
  whichFootball: boolean;
  whichMma: boolean;
  refreshRate: number;
  color: string;

  TODAY: string = TODAY;
  UPCOMING: string = UPCOMING;

  show = [true, false, false];
  showHome = true;


  constructor(private windowService: WindowService) {
    this.readFromLocalStorage();
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

  setColor(value: string): void {
    this.color = value;
    this.saveColorToLocalStorage();
    const root = document.documentElement;
    let buttonValue: string = value + 40;
    let backgroundValue: string = value + 80;
    root.style.setProperty('--buttonColor', `var(${buttonValue})`);
    root.style.setProperty('--backgroundColor', `var(${backgroundValue})`);
  }

  applySettings(
    refreshRate: number,
    showSports: boolean[],
    whichSelection: boolean[],
    title: string,
  ) {
    this.title = title;
    this.refreshRate = refreshRate;

    this.showBasketball = showSports[0];
    this.showFootball = showSports[1];
    this.showMma = showSports[2];
    this.whichBasketball = whichSelection[0];
    this.whichFootball = whichSelection[1];
    this.whichMma = whichSelection[2];

    this.saveToLocalStorage();
  }

  resetEverything(): void {
    window.localStorage.clear();

    this.showBasketball = _.cloneDeep(SHOW_SPORTS_DEFAULT);
    this.showFootball = _.cloneDeep(SHOW_SPORTS_DEFAULT);
    this.showMma = _.cloneDeep(SHOW_SPORTS_DEFAULT);
    this.whichBasketball = _.cloneDeep(WHICH_SELECTION_DEFAULT);
    this.whichFootball = _.cloneDeep(WHICH_SELECTION_DEFAULT);
    this.whichMma = _.cloneDeep(WHICH_SELECTION_DEFAULT);
    this.refreshRate = _.cloneDeep(REFRESH_RATE_DEFAULT);

    this.title = _.cloneDeep(TITLE_DEFAULT);
    this.setColor(_.cloneDeep(COLOR_DEFAULT));

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
