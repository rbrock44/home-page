import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Concert } from 'src/app/models/concert.model';

@Component({
  selector: 'app-concert-table',
  templateUrl: './concert-table.component.html',
  styleUrls: ['./concert-table.component.scss']
})
export class ConcertTableComponent implements OnInit {
  @Input() dataSource = new MatTableDataSource<Concert>();
  displayColumns: string[] = ['name', 'openers', 'location', 'city', 'date', 'attendees'];

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  sortData(): void {
    this.dataSource.data = this.sortTable(this.dataSource.data, this.sort);
  }

  private sortTable(data: Concert[], sort: MatSort): Concert[] {
    switch (sort.direction) {
      case 'asc':
        data = this.sortConcerts(data, sort.active)
        sort.direction = 'asc';
        break;
      case 'desc':
        data = this.sortConcerts(data, sort.active, false)
        sort.direction = 'desc';
        break;
      default:
        data = this.sortConcerts(data, "date")
        sort.direction = '';
    }

    return data
  }

  private sortConcerts(data: Concert[], column: string, asc: boolean = true): Concert[] {
    return data.sort((a: Concert, b: Concert) => {
      let value1 = Concert.getValue(column, a);
      let value2 = Concert.getValue(column, b);
      if (value1 > value2) {
        return asc ? 1 : -1
      } else if (value1 < value2) {
        return asc ? -1 : 1
      } else {
        return 0
      }
    });
  }
}
