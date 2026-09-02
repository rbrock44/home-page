import { Component, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { ConcertService } from 'src/app/services/concert.service';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-concert-table',
    templateUrl: './concert-table.component.html',
    styleUrls: ['./concert-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow]
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

  getFirstNames(attendees: string[]): string {
    return attendees.map(name => name.split(' ')[0]).join(', ');
  }
}
