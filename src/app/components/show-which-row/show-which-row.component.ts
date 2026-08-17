import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
    selector: 'app-show-which-row',
    template: `
    <div class="setting-row">
      <label data-checkbox-label class="setting-row__label" [for]="showHtmlId">
        {{name}}
      </label>
      <div class="setting-row__control">
        <mat-checkbox data-show-checkbox
          [formControl]="showControl"
          [id]="showHtmlId">
        </mat-checkbox>
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-select [formControl]="whichControl"
            [id]="whichHtmlId">
            <mat-option data-dropdown-option [value]="true">
              {{yesOption}}
            </mat-option>
            <mat-option data-dropdown-option [value]="false">
              {{noOption}}
            </mat-option>
          </mat-select>
          @if (whichControl.invalid && whichControl.touched) {
            <mat-error data-basic-error>
              Choose a value
            </mat-error>
          }
        </mat-form-field>
      </div>
    </div>
    `,
    styleUrls: ['./show-which-row.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ShowWhichRowComponent {
  @Input() showControl: UntypedFormControl;
  @Input() whichControl: UntypedFormControl;
  @Input() name: string;
  @Input() showHtmlId: string;
  @Input() whichHtmlId: string;
  @Input() yesOption: string = 'Yes';
  @Input() noOption: string = 'No';
}
