import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
    selector: 'app-concerts-page',
    templateUrl: './concerts.component.html',
    styleUrls: ['./concerts.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
