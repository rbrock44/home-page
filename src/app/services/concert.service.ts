import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { Concert } from '../models/concert.model';
import { CONCERTS } from '../constants/constants-concerts';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  concertList: Concert[] = CONCERTS;
  dataSource = new MatTableDataSource<Concert>(this.getList());
  sort: MatSort = new MatSort();

  sortData(sort: MatSort): void {
    this.dataSource.data = this.sortTable(this.dataSource.data, sort);
  }

  sortTable(data: Concert[], sort: MatSort): Concert[] {
    switch (sort?.direction) {
      case 'asc':
        data = this.sortConcerts(data, sort.active)
        sort.direction = 'asc';
        break;
      case 'desc':
        data = this.sortConcerts(data, sort.active, false)
        sort.direction = 'desc';
        break;
      default:
        data = this.sortConcerts(data, "date", false)
        if (sort?.direction)
          sort.direction = '';
    }

    return data
  }

  search(value: string): void {
    this.dataSource.data = this.concertsByCriteria(value);
  }

  private concertsByCriteria(criteria: string): Concert[] {
    let list: Concert[] = [];

    let crits = criteria.toUpperCase().trim().split(' ');

    if (crits[0].trim() != '') {
      list = this.getList().filter(it => this.matchesAllCriteria(crits, it));
    } else {
      list = this.getList();
    }

    list = this.sortTable(list, this.sort)

    return list;
  }

  private matchesAllCriteria(criteria: string[], concert: Concert): boolean {
    let value = true;

    criteria.forEach(it => {
      value = value && (concert.name.toUpperCase().indexOf(it) > -1 ||
        concert.openers.filter(x => x.toUpperCase().indexOf(it) > -1).length > 0 ||
        concert.attendees.filter(x => x.toUpperCase().indexOf(it) > -1).length > 0 ||
        concert.location.toUpperCase().indexOf(it) > -1 ||
        concert.city.toUpperCase().indexOf(it) > -1)
    })

    return value;
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

  private getList(): Concert[] {
    return _.cloneDeep(this.concertList);
  }
}
