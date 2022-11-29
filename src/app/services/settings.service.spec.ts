import {async, TestBed} from '@angular/core/testing';
import {SettingsService} from "./settings.service";
import {
  COLOR_DEFAULT,
  COLOR_OPTIONS,
  REFRESH_RATE_DEFAULT,
  SHOW_SPORTS_DEFAULT,
  TITLE_DEFAULT,
  WHICH_SELECTION_DEFAULT
} from "../constants/constants";
import {Item} from "../models/item.model";
import {WindowService} from "./window.service";

describe('SettingsService', () => {
  let service: SettingsService;
  let windowService: WindowService;
  const booleanArray = [
    [false, true, false],
    [true, false, true],
    [true, true, true],
    [false, false, false]
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
    }).compileComponents();
    service = TestBed.get(SettingsService);
    windowService = TestBed.get(WindowService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should apply default values', () => {
    expectServiceValues();
  });

  booleanArray.forEach(array => {
    it('should apply and save settings', () => {
      let title = 'new title';
      let refreshRate = 120;
      let color = COLOR_OPTIONS[3].value;

      const spy = spyOn(windowService, 'setItem');
      service.applySettings(refreshRate, array, array, title);
      service.setColor(color);

      expectServiceValues(
        array[0],
        array[1],
        array[2],
        array[0],
        array[1],
        array[2],
        refreshRate,
        title,
        color
      );

      [
        new Item('home-page-show-basketball', array[0].toString()),
        new Item('home-page-show-football', array[1].toString()),
        new Item('home-page-show-mma', array[2].toString()),
        new Item('home-page-which-basketball', array[0].toString()),
        new Item('home-page-which-football', array[1].toString()),
        new Item('home-page-which-mma', array[2].toString()),
        new Item('home-page-title', title),
        new Item('home-page-refresh-rate', refreshRate.toString()),
        new Item('home-page-color', color),
      ].forEach(item => {
        expect(spy).toHaveBeenCalledWith(item)
      });
    });
  });

  it('should reset settings', () => {
    let title = 'new title';
    let refreshRate = 120;
    let color = COLOR_OPTIONS[3].value;

    const spy = spyOn(windowService, 'setItem');
    service.applySettings(refreshRate, booleanArray[3], booleanArray[2], title);
    service.setColor(color);
    service.resetEverything();

    expectServiceValues();
    [
      new Item('home-page-show-basketball', booleanArray[3][0].toString()),
      new Item('home-page-show-football', booleanArray[3][0].toString()),
      new Item('home-page-show-mma', booleanArray[3][0].toString()),
      new Item('home-page-which-basketball', booleanArray[2][0].toString()),
      new Item('home-page-which-football', booleanArray[2][0].toString()),
      new Item('home-page-which-mma', booleanArray[2][0].toString()),
      new Item('home-page-title', title),
      new Item('home-page-refresh-rate', refreshRate.toString()),
      new Item('home-page-color', color),
    ].forEach(item => {
      expect(spy).toHaveBeenCalledWith(item)
    });
  });

  it('should next subject when settings reset', (done) => {
    service.settingsReset.subscribe(value => {
      expect(value).toBeTruthy();
      done();
    })

    service.resetEverything();
  })

  function expectServiceValues(
    showBasketball: boolean = SHOW_SPORTS_DEFAULT,
    showFootball: boolean = SHOW_SPORTS_DEFAULT,
    showMma: boolean = SHOW_SPORTS_DEFAULT,
    whichBasketball: boolean = WHICH_SELECTION_DEFAULT,
    whichFootball: boolean = WHICH_SELECTION_DEFAULT,
    whichMma: boolean = WHICH_SELECTION_DEFAULT,
    refreshRate: number = REFRESH_RATE_DEFAULT,
    title: string = TITLE_DEFAULT,
    color: string = COLOR_DEFAULT
  ) {
    expect(service.showBasketball).toEqual(showBasketball);
    expect(service.showFootball).toEqual(showFootball);
    expect(service.showMma).toEqual(showMma);
    expect(service.whichBasketball).toEqual(whichBasketball);
    expect(service.whichFootball).toEqual(whichFootball);
    expect(service.whichMma).toEqual(whichMma);
    expect(service.refreshRate).toEqual(refreshRate);
    expect(service.title).toEqual(title);
    expect(service.color).toEqual(color);
  }
});
