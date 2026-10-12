import {Component, EventEmitter, Output, input} from '@angular/core';
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
    selector: 'app-show-checkbox',
    template: `
    <div class="setting-row">
      <label data-checkbox-label class="setting-row__label" [for]="htmlId()">
        {{name()}}
      </label>
      <div class="setting-row__control">
        <mat-checkbox data-show-checkbox
          [formControl]="control()"
          [id]="htmlId()"
          (change)="onChange()">
        </mat-checkbox>
      </div>
    </div>
    `,
    styleUrls: ['./show-checkbox.component.scss'],
    imports: [MatCheckbox, FormsModule, ReactiveFormsModule]
})
export class ShowCheckboxComponent {
  readonly control = input<UntypedFormControl>(undefined);
  readonly name = input<string>(undefined);
  readonly htmlId = input<string>(undefined);
  @Output() changeEvent: EventEmitter<void> = new EventEmitter<void>();

  onChange(): void {
    this.changeEvent.emit();
  }
}
