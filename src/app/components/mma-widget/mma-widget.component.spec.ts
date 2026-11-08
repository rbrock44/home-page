import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {HomeApiService} from "../../services/home-api.service";
import {SettingsService} from "../../services/settings.service";
import {MmaWidgetComponent} from "./mma-widget.component";
import {
  clickElementAtIndex,
  expectElementAbsent,
  expectElementPresentAtIndex,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations";
import {Fight} from "../../models/fight.model";
import {FightCard} from "../../models/fight-card.model";
import {FightCardComponent} from "../fight-card/fight-card.component";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {of} from "rxjs";

describe('MmaWidgetComponent', () => {
  let fixture: ComponentFixture<MmaWidgetComponent>;
  let component: MmaWidgetComponent;
  let router: Router;
  let service: SettingsService;
  let homeApiService: HomeApiService;
  const expected = new FightCard({
    main: [
      new Fight({
        title: 'fight title 1',
        link: 'fight link 1',
        titleFight: true,
      }),
      new Fight({
        title: 'fight title 2',
        link: 'fight link 2',
        titleFight: false,
      }),
    ],
    under: [
      new Fight({
        title: 'fight title 3',
        link: 'fight link 3',
        titleFight: false,
      }),
      new Fight({
        title: 'fight title 4',
        link: 'fight link 4',
        titleFight: false,
      }),
    ],
    date: '11/28/2022',
    title: 'Title',
    titleLink: 'titleLink'
  });
  const elements = [
    '.sports-title',
    '.date-label',
    '.game-label',
    '.person-label',
    '.at-label'
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        RouterTestingModule,
        FightCardComponent,
        MmaWidgetComponent
    ],
    providers: [
        HomeApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
    ]
}).compileComponents();

    service = TestBed.inject(SettingsService);
    router = TestBed.inject(Router);
    homeApiService = TestBed.inject(HomeApiService);
    fixture = TestBed.createComponent(MmaWidgetComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show mma when told so and fights exist', () => {
    service.updateSetting({showMma: false});
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    service.updateSetting({showMma: true});
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    fixture.componentRef.setInput('fightCard', expected);
    fixture.detectChanges();

    expectElementToContainContent(fixture, '.sport-title', 'MMA');
    expectGames();
  });

  const card = (title: string, date: string) => new FightCard({
    main: [new Fight({title: title + ' main', link: title + ' link', titleFight: false})],
    under: [],
    date,
    title,
    titleLink: title + ' card'
  });
  const past = card('Past', 'November 21, 2022');
  const future = card('Future', 'December 5, 2022');

  it('should page through the fight cards and back', () => {
    const spy = vi.spyOn(homeApiService, 'getAllFightCards').mockReturnValue(of([past, expected, future]));
    service.updateSetting({showMma: true});
    fixture.componentRef.setInput('fightCard', expected);
    fixture.detectChanges();

    clickElementAtIndex(fixture, '.next-card', 0);
    fixture.detectChanges();
    expectElementToContainContent(fixture, '.date-label', 'December 5, 2022');
    expect(component.canStep(true)).toBe(false);

    clickElementAtIndex(fixture, '.prev-card', 0);
    fixture.detectChanges();
    expect(component.isBrowsing()).toBe(false);
    expectGames();

    clickElementAtIndex(fixture, '.prev-card', 0);
    fixture.detectChanges();
    expectElementToContainContent(fixture, '.date-label', 'November 21, 2022');
    expect(component.canStep(false)).toBe(false);
    expect(spy).toHaveBeenCalledTimes(1);

    clickElementAtIndex(fixture, '.date-label', 0);
    fixture.detectChanges();
    expectGames();
  });

  it('should place a card missing from the list by its date', () => {
    vi.spyOn(homeApiService, 'getAllFightCards').mockReturnValue(of([past, future]));
    service.updateSetting({showMma: true});
    fixture.componentRef.setInput('fightCard', expected);
    fixture.detectChanges();

    clickElementAtIndex(fixture, '.prev-card', 0);
    fixture.detectChanges();
    expectElementToContainContent(fixture, '.date-label', 'November 21, 2022');
  });

  function expectGames() {
    expectElementToContainContent(fixture, '.date-label', 'November 28, 2022');
    expectElementToContainContentAtIndex(fixture, '.card-label', 'Main Card', 0);
    expectElementToContainContentAtIndex(fixture, '.card-label', 'Under Card', 1);
    expectElementPresentAtIndex(fixture, 'app-fight-card', 0);
    expectElementPresentAtIndex(fixture, 'app-fight-card', 1);
  }
});
