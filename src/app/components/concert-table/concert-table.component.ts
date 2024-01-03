import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ConcertService } from 'src/app/services/concert.service';

@Component({
  selector: 'app-concert-table',
  templateUrl: './concert-table.component.html',
  styleUrls: ['./concert-table.component.scss']
})
export class ConcertTableComponent implements OnChanges {
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayColumns: string[] = ['name', 'openers', 'location', 'city', 'date', 'attendees'];

  constructor(public concertService: ConcertService) {
    this.concertService.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.concertService.sort = this.sort;
  }
}
