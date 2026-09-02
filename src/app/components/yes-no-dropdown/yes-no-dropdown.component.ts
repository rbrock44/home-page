import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatError } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-yes-no-dropdown',
    template: `
    <div class="setting-row">
      <div data-dropdown-label class="setting-row__label">
        {{name}}
      </div>
      <div class="setting-row__control">
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-select [formControl]="control" (selectionChange)="onChange()"
            [id]="htmlId">
            <mat-option data-dropdown-option [value]="true" [ngClass]="className">
              {{yesOption}}
            </mat-option>
            <mat-option data-dropdown-option [value]="false" [ngClass]="className">
              {{noOption}}
            </mat-option>
          </mat-select>
          @if (control.invalid && control.touched) {
            <mat-error data-basic-error>
              Choose a value
            </mat-error>
          }
        </mat-form-field>
      </div>
    </div>
    `,
    styleUrls: ['./yes-no-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatFormField, MatSelect, FormsModule, ReactiveFormsModule, MatOption, NgClass, MatError]
})
export class YesNoDropdownComponent {
  @Input() control: UntypedFormControl;
  @Input() name: string;
  @Input() htmlId: string;
  @Input() yesOption: string = 'Yes';
  @Input() noOption: string = 'No';
  @Output() changeEvent: EventEmitter<void> = new EventEmitter<void>();


  get className(): string {
    return this.htmlId + '-option';
  }

  constructor() {
  }

  onChange(): void {
    this.changeEvent.emit();
  }
}
