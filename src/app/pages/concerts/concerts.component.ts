import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-concerts-page',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertComponent {
  searchControl: FormControl = new FormControl('');

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
