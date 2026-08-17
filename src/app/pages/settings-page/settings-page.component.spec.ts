import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {HomeApiService} from "../../services/home-api.service";
import {SettingsService} from "../../services/settings.service";
import {SettingsPageComponent} from "./settings-page.component";
import {MaterialModule} from "../../material.module";
import {YesNoDropdownComponent} from "../../components/yes-no-dropdown/yes-no-dropdown.component";
import {ShowCheckboxComponent} from "../../components/show-checkbox/show-checkbox.component";
import {ShowWhichRowComponent} from "../../components/show-which-row/show-which-row.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  clickElementAtIndex,
  expectElementPresent,
  expectElementPresentAtIndex,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations.spec";
import {HEADER} from "../../constants/constants.spec";
import {AlertService} from "../../services/alert.service";
import {APPLY_SETTING_SUCCESS_MESSAGE} from "../../constants/constants";
import {DateService} from "../../services/date.service";
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('SettingsPageComponent', () => {
  let fixture: ComponentFixture<SettingsPageComponent>;
  let component;
  let router: Router;
  let settingsService: SettingsService;
  let alertService: AlertService;
  let dateService: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [
        SettingsPageComponent,
        ShowCheckboxComponent,
        ShowWhichRowComponent,
        YesNoDropdownComponent
    ],
    imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MaterialModule],
    providers: [
        HomeApiService,
        SettingsService,
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    router = TestBed.inject(Router);
    alertService = TestBed.inject(AlertService);
    dateService = TestBed.inject(DateService);
    spyOn(dateService, 'now').and.returnValue(1);
    settingsService = TestBed.inject(SettingsService);
    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    expectElementToContainContent(fixture, HEADER, 'Settings');
  });

  it('should have title input', () => {
    expectElementToContainContent(fixture, '[data-title-label]', 'Title');
    expectElementPresent(fixture, '[data-title]');
    expectElementPresentAtIndex(fixture, 'input', 0);
  });

  it('should have refresh rate input', () => {
    expectElementToContainContent(fixture, '[data-refresh-rate-input-label]', 'Refresh rate');
    expectElementPresent(fixture, '[data-refresh-rate-input]');
    expectElementPresentAtIndex(fixture, 'input', 1);
  });

  it('should contain 3 show/which rows', () => {
    for (let i = 0; i < 3; i++) {
      expectElementPresentAtIndex(fixture, 'app-show-which-row', i);
    }
  });

  it('should contain show checkboxes for auctions and links', () => {
    expectElementPresentAtIndex(fixture, 'app-show-checkbox', 0);
    expectElementPresentAtIndex(fixture, 'app-show-checkbox', 1);
  });

  it('should have color dropdown', () => {
    // Color is the only remaining element with a top-level data-dropdown-label
    const index = 0;

    expectElementToContainContentAtIndex(fixture, '[data-dropdown-label]', 'Color', index);
    // verifyDropdownOptions(fixture, options, values, index);
  });

  it('should apply color', () => {
    const settingSpy = spyOn(settingsService, 'setColor');

    component.setColor();

    expect(settingSpy).toHaveBeenCalledWith(component.colorControl.value);
  });

  it('should contain apply button', () => {
    expectElementToContainContentAtIndex(fixture, 'button', 'Apply', 0);
    const settingSpy = spyOn(settingsService, 'applySettings');
    const alertSpy = spyOn(alertService, 'success');

    clickElementAtIndex(fixture, 'button', 0);

    expect(settingSpy).toHaveBeenCalledWith(
      component.refreshRateControl.value,
      [
        component.showBasketballControl.value,
        component.showFootballControl.value,
        component.showMmaControl.value,
        component.showAuctionsControl.value,
      ],
      [
        component.whichBasketballControl.value,
        component.whichFootballControl.value,
        component.whichMmaControl.value,
      ],
      component.titleControl.value,
      component.showLinksControl.value
    );
    expect(alertSpy).toHaveBeenCalledWith(APPLY_SETTING_SUCCESS_MESSAGE, 1)
  });

  it('should contain reset button', () => {
    expectElementToContainContentAtIndex(fixture, 'button', 'Reset everything', 1);

    // TODO: test reset button click - has mat dialog
  });
});
