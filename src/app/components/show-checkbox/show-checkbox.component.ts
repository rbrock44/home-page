import {Component, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
    selector: 'app-show-checkbox',
    template: `
    <div class="setting-row">
      <label data-checkbox-label class="setting-row__label" [for]="htmlId">
        {{name}}
      </label>
      <div class="setting-row__control">
        <mat-checkbox data-show-checkbox
          [formControl]="control"
          [id]="htmlId"
          (change)="onChange()">
        </mat-checkbox>
      </div>
    </div>
    `,
    styleUrls: ['./show-checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ShowCheckboxComponent {
  @Input() control: UntypedFormControl;
  @Input() name: string;
  @Input() htmlId: string;
  @Output() changeEvent: EventEmitter<void> = new EventEmitter<void>();

  onChange(): void {
    this.changeEvent.emit();
  }
}
