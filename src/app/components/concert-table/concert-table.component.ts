import { Component, ViewChild } from '@angular/core';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { ConcertService } from 'src/app/services/concert.service';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { SettingsService } from 'src/app/services/settings.service';
import { MatTooltip } from '@angular/material/tooltip';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-concert-table',
    templateUrl: './concert-table.component.html',
    styleUrls: ['./concert-table.component.scss'],
    imports: [MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, MatTooltip, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, CurrencyPipe]
})
export class ConcertTableComponent {
  @ViewChild(MatSort) sort!: MatSort;

  displayColumns: string[] = ['name', 'openers', 'location', 'city', 'date', 'price', 'attendees'];

  constructor(public concertService: ConcertService, private settingsService: SettingsService) {
    if (!this.settingsService.showPrices) {
      this.displayColumns = this.displayColumns.filter(it => it !== 'price');
    }
  }

  getFirstNames(attendees: string[]): string {
    return attendees.map(name => name.split(' ')[0]).join(', ');
  }
}
