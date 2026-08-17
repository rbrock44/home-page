import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
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
  expectElementPresent,
  expectElementPresentAtIndex,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations.spec";
import {HEADER} from "../../constants/constants.spec";
import {AlertService} from "../../services/alert.service";
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

  it('should save show/which toggles instantly', () => {
    fixture.detectChanges();
    const settingSpy = spyOn(settingsService, 'updateSetting');

    component.showBasketballControl.setValue(false);
    expect(settingSpy).toHaveBeenCalledWith({showBasketball: false});

    component.whichBasketballControl.setValue(true);
    expect(settingSpy).toHaveBeenCalledWith({whichBasketball: true});

    component.showLinksControl.setValue(true);
    expect(settingSpy).toHaveBeenCalledWith({showLinks: true});
  });

  it('should save a valid title after it settles', fakeAsync(() => {
    fixture.detectChanges();
    const settingSpy = spyOn(settingsService, 'updateSetting');

    component.titleControl.setValue('new title');
    tick(400);

    expect(settingSpy).toHaveBeenCalledWith({title: 'new title'});
  }));

  it('should not save an invalid title', fakeAsync(() => {
    fixture.detectChanges();
    const settingSpy = spyOn(settingsService, 'updateSetting');

    component.titleControl.setValue('');
    tick(400);

    expect(settingSpy).not.toHaveBeenCalled();
  }));

  it('should save a valid refresh rate after it settles', fakeAsync(() => {
    fixture.detectChanges();
    const settingSpy = spyOn(settingsService, 'updateSetting');

    component.refreshRateControl.setValue('30');
    tick(400);

    expect(settingSpy).toHaveBeenCalledWith({refreshRate: 30});
  }));

  it('should contain reset button', () => {
    expectElementToContainContentAtIndex(fixture, 'button', 'Reset everything', 0);

    // TODO: test reset button click - has mat dialog
  });
});
