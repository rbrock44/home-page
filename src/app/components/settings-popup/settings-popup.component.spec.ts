import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {HomeApiService} from "../../services/home-api.service";
import {SettingsService} from "../../services/settings.service";
import {SettingsPopupComponent} from "./settings-popup.component";
import {ShowCheckboxComponent} from "../show-checkbox/show-checkbox.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  expectElementPresent,
  expectElementPresentAtIndex,
  expectElementToContainContent,
  expectElementToContainContentAtIndex
} from "../../constants/expectations";
import {HEADER} from "../../constants/expectations";
import {AlertService} from "../../services/alert.service";
import {DateService} from "../../services/date.service";
import { provideHttpClient, withXhr } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

describe('SettingsPopupComponent', () => {
  let fixture: ComponentFixture<SettingsPopupComponent>;
  let component: SettingsPopupComponent;
  let router: Router;
  let settingsService: SettingsService;
  let alertService: AlertService;
  let dateService: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        SettingsPopupComponent,
        ShowCheckboxComponent],
    providers: [
        HomeApiService,
        SettingsService,
        provideHttpClient(withXhr()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    router = TestBed.inject(Router);
    alertService = TestBed.inject(AlertService);
    dateService = TestBed.inject(DateService);
    vi.spyOn(dateService, 'now').mockReturnValue(1);
    settingsService = TestBed.inject(SettingsService);
    fixture = TestBed.createComponent(SettingsPopupComponent);
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

  it('should contain show checkboxes for basketball, football, mma, auctions and links', () => {
    for (let i = 0; i < 5; i++) {
      expectElementPresentAtIndex(fixture, 'app-show-checkbox', i);
    }
  });

  it('should have color dropdown', () => {
    // Color is the only remaining element with a top-level data-dropdown-label
    const index = 0;

    expectElementToContainContentAtIndex(fixture, '[data-dropdown-label]', 'Color', index);
    // verifyDropdownOptions(fixture, options, values, index);
  });

  it('should apply color', () => {
    const settingSpy = vi.spyOn(settingsService, 'setColor').mockImplementation(() => undefined);

    component.setColor();

    expect(settingSpy).toHaveBeenCalledWith(component.colorControl.value);
  });

  it('should save show toggles instantly', () => {
    fixture.detectChanges();
    const settingSpy = vi.spyOn(settingsService, 'updateSetting').mockImplementation(() => undefined);

    component.showBasketballControl.setValue(false);
    expect(settingSpy).toHaveBeenCalledWith({showBasketball: false});

    component.showLinksControl.setValue(true);
    expect(settingSpy).toHaveBeenCalledWith({showLinks: true});
  });

  it('should save a valid title after it settles', () => {
    vi.useFakeTimers();
    fixture.detectChanges();
    const settingSpy = vi.spyOn(settingsService, 'updateSetting').mockImplementation(() => undefined);

    component.titleControl.setValue('new title');
    vi.advanceTimersByTime(400);

    expect(settingSpy).toHaveBeenCalledWith({title: 'new title'});
  });

  it('should not save an invalid title', () => {
    vi.useFakeTimers();
    fixture.detectChanges();
    const settingSpy = vi.spyOn(settingsService, 'updateSetting').mockImplementation(() => undefined);

    component.titleControl.setValue('');
    vi.advanceTimersByTime(400);

    expect(settingSpy).not.toHaveBeenCalled();
  });

  it('should save a valid refresh rate after it settles', () => {
    vi.useFakeTimers();
    fixture.detectChanges();
    const settingSpy = vi.spyOn(settingsService, 'updateSetting').mockImplementation(() => undefined);

    component.refreshRateControl.setValue('30');
    vi.advanceTimersByTime(400);

    expect(settingSpy).toHaveBeenCalledWith({refreshRate: 30});
  });

  it('should contain reset button', () => {
    expectElementToContainContentAtIndex(fixture, 'button', 'Reset everything', 0);

    // TODO: test reset button click - has mat dialog
  });

  it('keeps the reset dialog inside a small screen', () => {
    const open = vi.spyOn(component.dialog, 'open').mockReturnValue(undefined as never);

    component.resetEverything();

    expect(open.mock.calls[0][1]).toEqual(expect.objectContaining({width: '420px', maxWidth: 'calc(100vw - 32px)'}));
  });

  it('should not show a close button outside the popup', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[data-close-button]')).toBeNull();
  });

  it('should close the popup from the close button', async () => {
    const dialogRef = {close: vi.fn()};
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [SettingsPopupComponent],
      providers: [
        {provide: MatDialogRef, useValue: dialogRef},
        provideHttpClient(withXhr()),
        provideHttpClientTesting()
      ]
    }).compileComponents();
    const popupFixture = TestBed.createComponent(SettingsPopupComponent);
    popupFixture.detectChanges();

    popupFixture.nativeElement.querySelector('[data-close-button]').click();

    expect(dialogRef.close).toHaveBeenCalledTimes(1);
  });
});
