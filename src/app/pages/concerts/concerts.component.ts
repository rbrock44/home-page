import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ConcertService } from 'src/app/services/concert.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { ConcertTableComponent } from '../../components/concert-table/concert-table.component';

@Component({
    selector: 'app-concerts-page',
    templateUrl: './concerts.component.html',
    styleUrls: ['./concerts.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatIcon, ConcertTableComponent]
})
export class ConcertComponent {
  searchControl: UntypedFormControl = new UntypedFormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.concertService.search(value);
    });
  }
  
  constructor(public concertService: ConcertService) {
  }
}
