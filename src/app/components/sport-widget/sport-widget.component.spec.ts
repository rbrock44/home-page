import {async, ComponentFixture, TestBed} from '@angular/core/testing';
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
} from "../../constants/expectations.spec";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from "../../models/game.model";
import {WindowService} from "../../services/window.service";

describe('SportWidgetComponent', () => {
  let fixture: ComponentFixture<SportWidgetComponent>;
  let component;
  let router: Router;
  let service: SettingsService;
  let windowService: WindowService
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
    date: '11/28/2022'
  });
  const elements = [
    '.sports-title',
    '.date-label',
    '.game-label',
    '.away-label',
    '.home-label'
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SportWidgetComponent
      ],
      providers: [
        HomeApiService,
      ]
    }).compileComponents();

    service = TestBed.get(SettingsService);
    windowService = TestBed.get(WindowService)
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SportWidgetComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show basketball games when told so and games exist', () => {
    service.showBasketball = false;
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    service.showBasketball = true;
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    component.gamesPerDate = expected;
    fixture.detectChanges();

    expectElementToContainContent(fixture, '.sport-title', 'Basketball');
    expectGames();
  });

  it('should show football games when told so and games exist', () => {
    service.showFootball = false;
    component.isBasketball = false;
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    service.showFootball = true;
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    component.gamesPerDate = expected;
    fixture.detectChanges();

    expectElementToContainContent(fixture, '.sport-title', 'Football');
    expectGames();
  });

  it('should route when team clicked', () => {
    const spy = spyOn(windowService, 'openBlank');
    service.showBasketball = true;
    component.gamesPerDate = expected;
    fixture.detectChanges();
    clickElementAtIndex(fixture, '.cursor', 0);
    expect(spy).toHaveBeenCalledWith(expected.games[0].opponentTeamLink);
    clickElementAtIndex(fixture, '.cursor', 1);
    expect(spy).toHaveBeenCalledWith(expected.games[0].homeTeamLink);
  });

  function expectGames() {
    expectElementToContainContent(fixture, '.date-label', expected.date);
    expectElementToContainContentAtIndex(fixture, '.away-label', expected.games[0].opponent, 0);
    expectElementToContainContentAtIndex(fixture, '.home-label', expected.games[0].home, 0);
    expectElementToContainContentAtIndex(fixture, '.at-label', '@', 0);
    expectElementToContainContentAtIndex(fixture, '.time-label', expected.games[0].time, 0);
    expectElementToContainContentAtIndex(fixture, '.away-label', expected.games[1].opponent, 1);
    expectElementToContainContentAtIndex(fixture, '.home-label', expected.games[1].home, 1);
    expectElementToContainContentAtIndex(fixture, '.at-label', '@', 1);
    expectElementToContainContentAtIndex(fixture, '.time-label', 'LIVE', 1);
  }
});
