import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {HomeApiService} from "../../services/home-api.service";
import {SettingsService} from "../../services/settings.service";
import {SportWidgetComponent} from "./sport-widget.component";
import {
  clickElementAtIndex,
  expectElementAbsent,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from "../../models/game.model";
import {WindowService} from "../../services/window.service";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {of} from "rxjs";

describe('SportWidgetComponent', () => {
  let fixture: ComponentFixture<SportWidgetComponent>;
  let component: SportWidgetComponent;
  let router: Router;
  let service: SettingsService;
  let windowService: WindowService
  let homeApiService: HomeApiService;
  const expected = new GamesPerDate({
    games: [
      new Game({
        opponent: 'Opponent1',
        opponentImageLink: 'opponentImageLink1',
        opponentTeamLink: 'opponentTeamLink1',
        home: 'home1',
        homeImageLink: 'homeImageLink1',
        homeTeamLink: 'homeTeamLink1',
        time: '6:00'
      }),
      new Game({
        opponent: 'Opponent2',
        opponentImageLink: 'opponentImageLink2',
        opponentTeamLink: 'opponentTeamLink2',
        home: 'home2',
        homeImageLink: 'homeImageLink2',
        homeTeamLink: 'homeTeamLink2',
        time: ''
      }),
    ],
    date: '11/28/2022',
    day: '20221128'
  });
  const nextDay = new GamesPerDate({
    games: [new Game({opponent: 'NextAway', home: 'NextHome', time: 'NXT 1, HOM 2'})],
    date: 'Tuesday, November 29, 2022',
    day: '20221129'
  });
  const elements = [
    '.sports-title',
    '.date-label',
    '.game-label',
    '.away-label',
    '.home-label'
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        SportWidgetComponent
    ],
    providers: [
        HomeApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
    ]
}).compileComponents();

    service = TestBed.inject(SettingsService);
    windowService = TestBed.inject(WindowService)
    homeApiService = TestBed.inject(HomeApiService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(SportWidgetComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show basketball games when told so and games exist', () => {
    service.updateSetting({showBasketball: false});
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    service.updateSetting({showBasketball: true});
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    fixture.componentRef.setInput('gamesPerDate', expected);
    fixture.detectChanges();

    expectElementToContainContent(fixture, '.sport-title', 'Basketball');
    expectGames();
  });

  it('should show football games when told so and games exist', () => {
    service.updateSetting({showFootball: false});
    fixture.componentRef.setInput('isBasketball', false);
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    service.updateSetting({showFootball: true});
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    fixture.componentRef.setInput('gamesPerDate', expected);
    fixture.detectChanges();

    expectElementToContainContent(fixture, '.sport-title', 'Football');
    expectGames();
  });

  it('should route when team clicked', () => {
    const spy = vi.spyOn(windowService, 'openBlank').mockImplementation(() => undefined);
    service.updateSetting({showBasketball: true});
    fixture.componentRef.setInput('gamesPerDate', expected);
    fixture.detectChanges();
    clickElementAtIndex(fixture, '.away-label', 0);
    expect(spy).toHaveBeenCalledWith(expected.games![0].opponentTeamLink);
    clickElementAtIndex(fixture, '.home-label', 0);
    expect(spy).toHaveBeenCalledWith(expected.games![0].homeTeamLink);
  });

  it('should page to the next game day and back', () => {
    const spy = vi.spyOn(homeApiService, 'getAdjacentGameDay').mockImplementation(
      (_isBasketball, _day, forward) => of(forward ? nextDay : expected));
    service.updateSetting({showBasketball: true});
    fixture.componentRef.setInput('gamesPerDate', expected);
    fixture.detectChanges();

    clickElementAtIndex(fixture, '.next-day', 0);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(true, '20221128', true);
    expectElementToContainContent(fixture, '.date-label', nextDay.date!);
    expectElementToContainContentAtIndex(fixture, '.home-label', 'NextHome', 0);

    clickElementAtIndex(fixture, '.prev-day', 0);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(true, '20221129', false);
    expectGames();
    expect(component.isBrowsing()).toBe(false);
  });

  it('should return to the current games when the browsed date is clicked', () => {
    vi.spyOn(homeApiService, 'getAdjacentGameDay').mockReturnValue(of(nextDay));
    service.updateSetting({showFootball: true});
    fixture.componentRef.setInput('isBasketball', false);
    fixture.componentRef.setInput('gamesPerDate', expected);
    fixture.detectChanges();

    clickElementAtIndex(fixture, '.next-day', 0);
    fixture.detectChanges();
    clickElementAtIndex(fixture, '.date-label', 0);
    fixture.detectChanges();
    expectGames();
  });

  it('should disable an arrow once there are no more game days that way', () => {
    const spy = vi.spyOn(homeApiService, 'getAdjacentGameDay').mockReturnValue(of(new GamesPerDate({games: [], date: ''})));
    service.updateSetting({showBasketball: true});
    fixture.componentRef.setInput('gamesPerDate', expected);
    fixture.detectChanges();

    clickElementAtIndex(fixture, '.next-day', 0);
    fixture.detectChanges();
    expectGames();
    expect(component.canStep(true)).toBe(false);
    expect(component.canStep(false)).toBe(true);
    clickElementAtIndex(fixture, '.next-day', 0);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  function expectGames() {
    expectElementToContainContent(fixture, '.date-label', expected.date!);
    expectElementToContainContentAtIndex(fixture, '.away-label', expected.games![0].opponent, 0);
    expectElementToContainContentAtIndex(fixture, '.home-label', expected.games![0].home, 0);
    expectElementToContainContentAtIndex(fixture, '.at-label', '@', 0);
    expectElementToContainContentAtIndex(fixture, '.time-label', expected.games![0].time, 0);
    expectElementToContainContentAtIndex(fixture, '.away-label', expected.games![1].opponent, 1);
    expectElementToContainContentAtIndex(fixture, '.home-label', expected.games![1].home, 1);
    expectElementToContainContentAtIndex(fixture, '.at-label', '@', 1);
    expectElementToContainContentAtIndex(fixture, '.time-label', 'LIVE', 1);
  }
});
