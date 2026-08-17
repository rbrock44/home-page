import {Component, OnDestroy, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import {AlertService} from 'src/app/services/alert.service';
import {ConfirmationPopupComponent} from 'src/app/components/confirmation-popup/confirmation-popup.component';
import {SettingsService} from 'src/app/services/settings.service';
import {
  ACTION_CANCELLED_MESSAGE,
  COLOR_OPTIONS,
  RESET_EVERYTHING_MESSAGE,
  RESET_SETTINGS_SUCCESS_MESSAGE
} from "../../constants/constants";
import {DateService} from "../../services/date.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-settings-page',
    templateUrl: './settings-page.component.html',
    styleUrls: ['./settings-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  colors = COLOR_OPTIONS;

  refreshRateControl: UntypedFormControl = new UntypedFormControl('', [
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern('^[0-9.]*$'),
    Validators.required
  ]);

  titleControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showFootballControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showBasketballControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showMmaControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showAuctionsControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  showLinksControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  whichFootballControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  whichBasketballControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  whichMmaControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
  colorControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog,
              private alertService: AlertService,
              private dateService: DateService,
              public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.applySettingsValuesToFormControls();

    // Booleans and dropdowns are always valid, so they save the instant they change.
    this.subscriptions.push(
      this.showBasketballControl.valueChanges.subscribe(value => this.settingsService.updateSetting({showBasketball: value})),
      this.showFootballControl.valueChanges.subscribe(value => this.settingsService.updateSetting({showFootball: value})),
      this.showMmaControl.valueChanges.subscribe(value => this.settingsService.updateSetting({showMma: value})),
      this.showAuctionsControl.valueChanges.subscribe(value => this.settingsService.updateSetting({showAuctions: value})),
      this.showLinksControl.valueChanges.subscribe(value => this.settingsService.updateSetting({showLinks: value})),
      this.whichBasketballControl.valueChanges.subscribe(value => this.settingsService.updateSetting({whichBasketball: value})),
      this.whichFootballControl.valueChanges.subscribe(value => this.settingsService.updateSetting({whichFootball: value})),
      this.whichMmaControl.valueChanges.subscribe(value => this.settingsService.updateSetting({whichMma: value})),
    );

    // Text/number fields debounce and only save once the value is valid, so a
    // half-typed title or an out-of-range refresh rate never gets persisted.
    this.subscriptions.push(
      this.titleControl.valueChanges.pipe(
        debounceTime(400),
        filter(() => this.titleControl.valid),
      ).subscribe(value => this.settingsService.updateSetting({title: value})),
      this.refreshRateControl.valueChanges.pipe(
        debounceTime(400),
        filter(() => this.refreshRateControl.valid),
      ).subscribe(value => this.settingsService.updateSetting({refreshRate: +value})),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.settingsService.ngOnDestroy();
  }

  resetEverything(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      data: {
        label: RESET_EVERYTHING_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldReset => {
        if (shouldReset) {
          this.settingsService.resetEverything();
          this.applySettingsValuesToFormControls();
          this.alertService.success(RESET_SETTINGS_SUCCESS_MESSAGE, this.dateService.now());
        } else {
          this.alertService.warn(ACTION_CANCELLED_MESSAGE, this.dateService.now());
        }
      });
    }
  }

  applySettingsValuesToFormControls(): void {
    this.showBasketballControl.setValue(this.settingsService.showBasketball);
    this.showFootballControl.setValue(this.settingsService.showFootball);
    this.showMmaControl.setValue(this.settingsService.showMma);
    this.showAuctionsControl.setValue(this.settingsService.showAuctions);
    this.showLinksControl.setValue(this.settingsService.showLinks);
    this.whichBasketballControl.setValue(this.settingsService.whichBasketball);
    this.whichFootballControl.setValue(this.settingsService.whichFootball);
    this.whichMmaControl.setValue(this.settingsService.whichMma);

    this.titleControl.setValue(this.settingsService.title);
    this.refreshRateControl.setValue(this.settingsService.refreshRate);

    this.colorControl.setValue(this.settingsService.color);
  }

  setColor(): void {
    this.settingsService.setColor(this.colorControl.value);
  }

  getBackgroundColor(value: string): string {
    return 'var(' + value + 40 + ')';
  }

  get selectedColorName(): string {
    return this.colors.find(color => color.value === this.colorControl.value)?.name ?? '';
  }
}
