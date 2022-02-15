import {Injectable, OnDestroy} from '@angular/core';
import * as _ from 'lodash';
import {Observable, Subject} from 'rxjs';

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

  TODAY: string = 'Today';
  UPCOMING: string = 'Upcoming';

  SHOW_SPORTS_DEFAULT = true;
  WHICH_SELECTION_DEFAULT = false;

  COLOR_DEFAULT = '--blue-color-';
  TITLE_DEFAULT = 'Home Page';
  REFRESH_RATE_DEFAULT = 60;

  constructor() {
    this.readFromLocalStorage();
  }

  ngOnDestroy(): void {
    this.saveToLocalStorage();
  }

  get settingsReset(): Observable<boolean> {
    return this._settingsResetSubject;
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

  //#region Reset Methods
  resetEverything(): void {
    window.localStorage.clear();

    this.showBasketball = _.cloneDeep(this.SHOW_SPORTS_DEFAULT);
    this.showFootball = _.cloneDeep(this.SHOW_SPORTS_DEFAULT);
    this.showMma = _.cloneDeep(this.SHOW_SPORTS_DEFAULT);
    this.whichBasketball = _.cloneDeep(this.WHICH_SELECTION_DEFAULT);
    this.whichFootball = _.cloneDeep(this.WHICH_SELECTION_DEFAULT);
    this.whichMma = _.cloneDeep(this.WHICH_SELECTION_DEFAULT);
    this.refreshRate = _.cloneDeep(this.REFRESH_RATE_DEFAULT);

    this.title = _.cloneDeep(this.TITLE_DEFAULT);
    this.setColor(_.cloneDeep(this.COLOR_DEFAULT));

    this.saveToLocalStorage();

    this._settingsResetSubject.next(true);
  }

  //#endregion

  //#region Get From Local Storage
  public readLocalStorage(): void {
    this.readFromLocalStorage();
  }

  private readFromLocalStorage(): void {
    this.title = this.getTitleOrDefault();
    this.refreshRate = this.getRefreshRateOrDefault();

    this.showBasketball = this.getBoolean(this.getShowBasketballOrDefault());
    this.showFootball = this.getBoolean(this.getShowFootballOrDefault());
    this.showMma = this.getBoolean(this.getShowMmaOrDefault());
    this.whichBasketball = this.getBoolean(this.getWhichBasketballOrDefault());
    this.whichFootball = this.getBoolean(this.getWhichFootballOrDefault());
    this.whichMma = this.getBoolean(this.getWhichMmaOrDefault());

    this.setColor(this.getColorOrDefault());
  }

  private getBoolean(value): boolean {
    switch (value) {
      case true:
      case 'true':
      case 1:
      case '1':
      case 'on':
      case 'yes':
        return true;
      default:
        return false;
    }
  }

  private getBooleanArray(value, defaultValue: boolean = false, minLength: number = 3): boolean[] {
    let newArray: boolean[] = []
    if (value.length > 0) {
      value.forEach(item => {
        newArray.push(this.getBoolean(item));
      })
    }

    if (value.length < minLength) {
      let i = 0
      for (i; i < value.length - minLength; i++) {
        newArray.push(defaultValue);
      }
    }
    return newArray;
  }

  private isNullOrUndefined(str: string): boolean {
    return str == null || str === 'undefined' || str === 'null';
  }

  private getTitleOrDefault(): string {
    const title: string = window.localStorage.getItem('home-page-title');
    return !this.isNullOrUndefined(title) ? title : _.cloneDeep(this.TITLE_DEFAULT);
  }

  private getRefreshRateOrDefault(): number {
    const rate: string = window.localStorage.getItem('home-page-refresh-rate');
    return !this.isNullOrUndefined(rate) ? +rate : _.cloneDeep(this.REFRESH_RATE_DEFAULT);
  }

  private getColorOrDefault(): string {
    const color: string = window.localStorage.getItem('home-page-color');
    return !this.isNullOrUndefined(color) ? color : _.cloneDeep(this.COLOR_DEFAULT);
  }

  private getShowBasketballOrDefault(): string {
    const showBasketball: string = window.localStorage.getItem('home-page-show-basketball');
    return !this.isNullOrUndefined(showBasketball) ? showBasketball : _.cloneDeep(this.SHOW_SPORTS_DEFAULT);
  }

  private getShowFootballOrDefault(): string {
    const showFootball: string = window.localStorage.getItem('home-page-show-football');
    return !this.isNullOrUndefined(showFootball) ? showFootball : _.cloneDeep(this.SHOW_SPORTS_DEFAULT);
  }

  private getShowMmaOrDefault(): string {
    const showMma: string = window.localStorage.getItem('home-page-show-mma');
    return !this.isNullOrUndefined(showMma) ? showMma : _.cloneDeep(this.SHOW_SPORTS_DEFAULT);
  }

  private getWhichBasketballOrDefault(): string {
    const whichBasketball: string = window.localStorage.getItem('home-page-which-basketball');
    return !this.isNullOrUndefined(whichBasketball) ? whichBasketball : _.cloneDeep(this.WHICH_SELECTION_DEFAULT);
  }

  private getWhichFootballOrDefault(): string {
    const whichFootball: string = window.localStorage.getItem('home-page-which-football');
    return !this.isNullOrUndefined(whichFootball) ? whichFootball : _.cloneDeep(this.WHICH_SELECTION_DEFAULT);
  }

  private getWhichMmaOrDefault(): string {
    const whichMma: string = window.localStorage.getItem('home-page-which-mma');
    return !this.isNullOrUndefined(whichMma) ? whichMma : _.cloneDeep(this.WHICH_SELECTION_DEFAULT);
  }

  //#endregion

  //#region Save to Local Storage
  private saveToLocalStorage(): void {
    window.localStorage.setItem('home-page-show-basketball', this.showBasketball.toString());
    window.localStorage.setItem('home-page-show-football', this.showFootball.toString());
    window.localStorage.setItem('home-page-show-mma', this.showMma.toString());
    window.localStorage.setItem('home-page-which-basketball', this.whichBasketball.toString());
    window.localStorage.setItem('home-page-which-football', this.whichFootball.toString());
    window.localStorage.setItem('home-page-which-mma', this.whichMma.toString());

    window.localStorage.setItem('home-page-title', this.title);
    window.localStorage.setItem('home-page-refresh-rate', this.refreshRate.toString());

    this.saveColorToLocalStorage();
  }

  private saveColorToLocalStorage(): void {
    window.localStorage.setItem('home-page-color', this.color);
  }

  //#endregion
}
