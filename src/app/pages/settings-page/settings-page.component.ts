import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AlertService} from 'src/app/services/alert.service';
import {ConfirmationPopupComponent} from 'src/app/components/confirmation-popup/confirmation-popup.component';
import {SettingsService} from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings-page',
  template: `
    <div>
      <div class="header-div">
        <header data-header-title>Settings</header>
      </div>

      <div data-settings-input>
        <!-- TITLE  -->
        <div class="settings-value-ctn">
          <div data-title-label class="settings-value-label">Title</div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-title
                   type="text"
                   rows="1"
                   [formControl]="titleControl"
            >
            <mat-error data-basic-error *ngIf="!titleControl.valid">
              Title is required
            </mat-error>
          </mat-form-field>
        </div>
        <!-- REFRESH RATE  -->
        <div class="settings-value-ctn">
          <div data-refresh-rate-input-label class="settings-value-label">Refresh Rate (min)</div>
          <mat-form-field class="settings-value-form-field">
            <input matInput data-refresh-rate-input
                   type="number"
                   rows="1"
                   [formControl]="refreshRateControl"
            >
            <mat-error data-basic-error *ngIf="!refreshRateControl.hasError('required')">
              Refresh Rate is required
            </mat-error>
            <mat-error data-max-error *ngIf="!refreshRateControl.hasError('max')">
              Refresh Rate cannot exceed 1000
            </mat-error>
          </mat-form-field>
        </div>

        <!-- show basketball?  -->
        <app-yes-no-dropdown [control]="showBasketballControl"
                             [htmlId]="'show-basketball'"
                             [name]="'Show Basketball Games'"
        ></app-yes-no-dropdown>
        <!-- show football?  -->
        <app-yes-no-dropdown [control]="showFootballControl"
                             [htmlId]="'show-football'"
                             [name]="'Show Football Games'"
        ></app-yes-no-dropdown>
        <!-- show mma?  -->
        <app-yes-no-dropdown [control]="showMmaControl"
                             [htmlId]="'show-mma'"
                             [name]="'Show MMA Fights'"
        ></app-yes-no-dropdown>
        <!-- which basketball?  -->
        <app-yes-no-dropdown [control]="whichBasketballControl"
                             [htmlId]="'which-basketball'"
                             [yesOption]="this.settingsService.TODAY"
                             [noOption]="this.settingsService.UPCOMING"
                             [name]="'Which Basketball Games'"
        ></app-yes-no-dropdown>
        <!-- which football?  -->
        <app-yes-no-dropdown [control]="whichFootballControl"
                             [htmlId]="'which-football'"
                             [yesOption]="this.settingsService.TODAY"
                             [noOption]="this.settingsService.UPCOMING"
                             [name]="'Which Football Games'"
        ></app-yes-no-dropdown>
        <!-- which mma?  -->
        <app-yes-no-dropdown [control]="whichMmaControl"
                             [htmlId]="'which-mma'"
                             [yesOption]="this.settingsService.TODAY"
                             [noOption]="this.settingsService.UPCOMING"
                             [name]="'Which MMA Fights'"
        ></app-yes-no-dropdown>
        <!-- COLOR  -->
        <div class="dropdown-ctn">
          <div data-dropdown-label class="dropdown__label">
            Color - *Applies Immediately
          </div>
          <div class="dropdown__data">
            <mat-form-field class="dropdown-form-field">
              <mat-label>Select Value</mat-label>
              <mat-select [formControl]="colorControl" (selectionChange)="setColor()"
                          [ngStyle]="{'background-color': getBackgroundColor(this.colorControl.value)}">
                <mat-option *ngFor="let color of this.colors" data-dropdown-option [value]="color.value"
                            [ngStyle]="{'background-color': getBackgroundColor(color.value)}"
                >
                  {{color.name}}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </div>

      <div class="buttons">
        <button data-button-apply
                (click)="applyToSettings()"
                [disabled]="!this.settingsFormGroup.valid"
                class="apply-button">Apply
        </button>
        <div>
          <button data-button-reset-everything
                  (click)="resetEverything()"
                  class="reset-button">Reset Everything
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  colors = [
    {
      name: 'Black',
      value: '--black-color-'
    },
    {
      name: 'Blue',
      value: '--blue-color-'
    },
    {
      name: 'Gray',
      value: '--gray-color-'
    },
    {
      name: 'Gray Dark',
      value: '--gray-dark-color-'
    },
    {
      name: 'Green',
      value: '--green-color-'
    },
    {
      name: 'Orange',
      value: '--orange-color-'
    },
    {
      name: 'Pink',
      value: '--pink-color-'
    },
    {
      name: 'Purple',
      value: '--purple-color-'
    },
    {
      name: 'Red',
      value: '--red-color-'
    },
    {
      name: 'Yellow',
      value: '--yellow-color-'
    },
    {
      name: 'White',
      value: '--white-color-'
    }
  ];

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

  RESET_EVERYTHING_MESSAGE: string = 'This will reset everything to the default settings.';
  RESET_SETTINGS_SUCCESS_MESSAGE: string = 'Setting reset successfully.';
  APPLY_SETTING_SUCCESS_MESSAGE: string = 'Settings applied successfully.';
  ACTION_CANCELLED_MESSAGE: string = 'Action Cancelled.';

  constructor(public dialog: MatDialog,
              private alertService: AlertService,
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
        label: this.RESET_EVERYTHING_MESSAGE
      },
      id: 'confirmation-modal',
      width: '35vw'
    });
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(shouldReset => {
        if (shouldReset) {
          this.settingsService.resetEverything();
          this.applySettingsValuesToFormControls();
          this.alertService.success(this.RESET_SETTINGS_SUCCESS_MESSAGE, Date.now());
        } else {
          this.alertService.warn(this.ACTION_CANCELLED_MESSAGE, Date.now());
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
    this.alertService.success(this.APPLY_SETTING_SUCCESS_MESSAGE, Date.now());
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
