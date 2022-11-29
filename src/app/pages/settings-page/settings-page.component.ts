import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AlertService} from 'src/app/services/alert.service';
import {ConfirmationPopupComponent} from 'src/app/components/confirmation-popup/confirmation-popup.component';
import {SettingsService} from 'src/app/services/settings.service';
import {
  ACTION_CANCELLED_MESSAGE,
  APPLY_SETTING_SUCCESS_MESSAGE,
  COLOR_OPTIONS,
  RESET_EVERYTHING_MESSAGE,
  RESET_SETTINGS_SUCCESS_MESSAGE
} from "../../constants/constants";
import {DateService} from "../../services/date.service";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  colors = COLOR_OPTIONS;

  refreshRateControl: FormControl = new FormControl('', [
    Validators.min(1),
    Validators.max(1000),
    Validators.pattern('^[0-9.]*$'),
    Validators.required
  ]);

  titleControl: FormControl = new FormControl('', [Validators.required]);
  showFootballControl: FormControl = new FormControl('', [Validators.required]);
  showBasketballControl: FormControl = new FormControl('', [Validators.required]);
  showMmaControl: FormControl = new FormControl('', [Validators.required]);
  whichFootballControl: FormControl = new FormControl('', [Validators.required]);
  whichBasketballControl: FormControl = new FormControl('', [Validators.required]);
  whichMmaControl: FormControl = new FormControl('', [Validators.required]);
  colorControl: FormControl = new FormControl('', [Validators.required]);

  settingsFormGroup: FormGroup;

  constructor(public dialog: MatDialog,
              private alertService: AlertService,
              private dateService: DateService,
              public settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsFormGroup = new FormGroup({
      refreshRate: this.refreshRateControl,
      title: this.titleControl,
      showFootball: this.showFootballControl,
      showBasketball: this.showBasketballControl,
      showMma: this.showMmaControl,
      whichFootball: this.whichFootballControl,
      whichBasketball: this.whichBasketballControl,
      whichMma: this.whichMmaControl,
      applyNextRound: this.colorControl,
    });

    this.applySettingsValuesToFormControls();
  }

  ngOnDestroy(): void {
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

  applyToSettings(): void {
    this.settingsService.applySettings(
      this.refreshRateControl.value,
      [
        this.showBasketballControl.value,
        this.showFootballControl.value,
        this.showMmaControl.value,
      ],
      [
        this.whichBasketballControl.value,
        this.whichFootballControl.value,
        this.whichMmaControl.value,
      ],
      this.titleControl.value,
    );
    this.alertService.success(APPLY_SETTING_SUCCESS_MESSAGE, this.dateService.now());
  }

  applySettingsValuesToFormControls(): void {
    this.showBasketballControl.setValue(this.settingsService.showBasketball);
    this.showFootballControl.setValue(this.settingsService.showFootball);
    this.showMmaControl.setValue(this.settingsService.showMma);
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
}
