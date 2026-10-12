import type {Mock} from 'vitest';
import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {HomeComponent} from "./home.component";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {SettingsService} from "../../services/settings.service";
import {WindowService} from "../../services/window.service";
import {
  expectElementPresent,
  expectElementPresentAtIndex,
  expectElementToContainContent
} from "../../constants/expectations";
import {HEADER} from "../../constants/expectations";
import {SportWidgetComponent} from "../../components/sport-widget/sport-widget.component";
import {REFRESH_RATE_DEFAULT} from "../../constants/constants";
import {MmaWidgetComponent} from "../../components/mma-widget/mma-widget.component";
import {AuctionWidgetComponent} from "../../components/auction-widget/auction-widget.component";
import {FightCardComponent} from "../../components/fight-card/fight-card.component";
import {MediaSearchWidgetComponent} from "../../components/media-search-widget/media-search-widget.component";
import {ReactiveFormsModule} from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component;
  let router: Router;
  let service: SettingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReactiveFormsModule,
        RouterTestingModule, HomeComponent,
        AuctionWidgetComponent,
        FightCardComponent,
        MediaSearchWidgetComponent,
        MmaWidgetComponent,
        SportWidgetComponent],
    providers: [
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    router = TestBed.inject(Router);
    service = TestBed.inject(SettingsService);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  });

  describe('refresh timer', () => {
    let windowService: WindowService;
    let nextId: number;

    beforeEach(() => {
      windowService = TestBed.inject(WindowService);
      nextId = 0;
      vi.spyOn(windowService, 'setInterval').mockImplementation(() => ++nextId);
      vi.spyOn(windowService, 'clearInterval').mockImplementation(() => undefined);
    });

    it('starts one refresh loop on load', () => {
      fixture.detectChanges();

      expect(windowService.setInterval).toHaveBeenCalledTimes(1);
    });

    it('stops the refresh loop when leaving the page', () => {
      fixture.detectChanges();

      fixture.destroy();

      expect(windowService.clearInterval).toHaveBeenCalledWith(1);
    });

    it('replaces the refresh loop on a settings reset instead of adding one', () => {
      fixture.detectChanges();

      service.resetEverything();

      expect(windowService.clearInterval).toHaveBeenCalledWith(1);
      expect(windowService.setInterval).toHaveBeenCalledTimes(2);
    });

    it('does not save settings when leaving the page', () => {
      const setItem = vi.spyOn(windowService, 'setItem').mockImplementation(() => undefined);
      fixture.detectChanges();
      setItem.mockClear();

      fixture.destroy();

      expect(setItem).not.toHaveBeenCalled();
    });

    it('ignores settings resets after leaving the page', () => {
      fixture.detectChanges();
      fixture.destroy();

      service.resetEverything();

      expect(windowService.setInterval).toHaveBeenCalledTimes(1);
    });

    describe('when the tab is hidden', () => {
      let visibilityChanged: (hidden: boolean) => void;
      let stopWatching: Mock;

      beforeEach(() => {
        stopWatching = vi.fn();
        vi.spyOn(windowService, 'onVisibilityChange').mockImplementation(listener => {
          visibilityChanged = listener;
          return stopWatching;
        });
        fixture.detectChanges();
      });

      it('pauses the refresh loop', () => {
        visibilityChanged(true);

        expect(windowService.clearInterval).toHaveBeenCalledWith(1);
      });

      it('refreshes and restarts the loop when shown again', () => {
        const getSpotPrices = vi.spyOn(component.homeApiService, 'getSpotPrices');
        visibilityChanged(true);

        visibilityChanged(false);

        expect(getSpotPrices).toHaveBeenCalledTimes(1);
        expect(windowService.setInterval).toHaveBeenCalledTimes(2);
      });

      it('stops watching when leaving the page', () => {
        fixture.destroy();

        expect(stopWatching).toHaveBeenCalled();
      });
    });
  });

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
          true,
          true
        ],
        [
          true,
          true,
          true
        ],
        item,
        false
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
      component.refreshCount.set(item);
      fixture.detectChanges();
      expectElementToContainContent(fixture, '.refresh-count', `Refresh count: ${item.toString()}`);
    });
  })
});
