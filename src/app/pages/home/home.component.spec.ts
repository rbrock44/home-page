import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {HomeComponent} from "./home.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SettingsService} from "../../services/settings.service";
import {
  expectElementPresent,
  expectElementPresentAtIndex,
  expectElementToContainContent
} from "../../constants/expectations.spec";
import {HEADER} from "../../constants/constants.spec";
import {SportWidgetComponent} from "../../components/sport-widget/sport-widget.component";
import {REFRESH_RATE_DEFAULT} from "../../constants/constants";
import {MmaWidgetComponent} from "../../components/mma-widget/mma-widget.component";
import {FightCardComponent} from "../../components/fight-card/fight-card.component";
import {MediaSearchWidgetComponent} from "../../components/media-search-widget/media-search-widget.component";

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component;
  let router: Router;
  let service: SettingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        HomeComponent,
        FightCardComponent,
        MediaSearchWidgetComponent,
        MmaWidgetComponent,
        SportWidgetComponent
      ],
      providers: [
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    service = TestBed.get(SettingsService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have widgets for basketball and football', () => {
    expectElementPresentAtIndex(fixture, 'app-sport-widget', 0);
    expectElementPresentAtIndex(fixture, 'app-sport-widget', 1);
  });

  it('should have mmw widget', () => {
    expectElementPresent(fixture, 'app-mma-widget');
  });

  it('should have home media search widget', () => {
    expectElementPresent(fixture, 'app-media-search-widget');
  });

  [
    'title',
    'new title'
  ].forEach(item => {
    it(`should display title in settings: ${item}`, () => {
      service.applySettings(
        REFRESH_RATE_DEFAULT,
        [
          true,
          true,
          true
        ],
        [
          true,
          true,
          true
        ],
        item
      );
      fixture.detectChanges();
      expectElementToContainContent(fixture, HEADER, item);
    });
  });

  [
    0,
    100,
    123
  ].forEach(item => {
    it(`should show the refresh count: ${item}`, () => {
      component.refreshCount = item;
      fixture.detectChanges();
      expectElementToContainContent(fixture, '.refresh-count', `Refresh count: ${item.toString()}`);
    });
  })
});
