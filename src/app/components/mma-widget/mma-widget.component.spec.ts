import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {HomeApiService} from "../../services/home-api.service";
import {SettingsService} from "../../services/settings.service";
import {MmaWidgetComponent} from "./mma-widget.component";
import {
  expectElementAbsent,
  expectElementPresentAtIndex,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations.spec";
import {Fight} from "../../models/fight.model";
import {FightCard} from "../../models/fight-card.model";
import {FightCardComponent} from "../fight-card/fight-card.component";

describe('MmaWidgetComponent', () => {
  let fixture: ComponentFixture<MmaWidgetComponent>;
  let component;
  let router: Router;
  let service: SettingsService;
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
        RouterTestingModule
      ],
      declarations: [
        FightCardComponent,
        MmaWidgetComponent,
      ],
      providers: [
        HomeApiService,
      ]
    }).compileComponents();

    service = TestBed.inject(SettingsService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(MmaWidgetComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show mma when told so and fights exist', () => {
    service.showMma = false;
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    service.showMma = true;
    fixture.detectChanges();

    elements.forEach(element => {
      expectElementAbsent(fixture, element);
    });

    fixture.componentRef.setInput('fightCard', expected);
    fixture.detectChanges();

    expectElementToContainContent(fixture, '.sport-title', 'MMA');
    expectGames();
  });

  function expectGames() {
    expectElementToContainContent(fixture, '.date-label', 'November 28, 2022');
    expectElementToContainContentAtIndex(fixture, '.card-label', 'Main Card', 0);
    expectElementToContainContentAtIndex(fixture, '.card-label', 'Under Card', 1);
    expectElementPresentAtIndex(fixture, 'app-fight-card', 0);
    expectElementPresentAtIndex(fixture, 'app-fight-card', 1);
  }
});
