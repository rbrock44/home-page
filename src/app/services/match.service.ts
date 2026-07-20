import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { Match } from '../models/match.model';
import { MATCHES } from '../constants/constants-matches';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchList: Match[] = MATCHES;
  dataSource = new MatTableDataSource<Match>(this.getList());
  sort: MatSort = new MatSort();

  sortData(sort: MatSort): void {
    this.dataSource.data = this.sortTable(this.dataSource.data, sort);
  }

  sortTable(data: Match[], sort: MatSort): Match[] {
    switch (sort?.direction) {
      case 'asc':
        data = this.sortMatches(data, sort.active)
        sort.direction = 'asc';
        break;
      case 'desc':
        data = this.sortMatches(data, sort.active, false)
        sort.direction = 'desc';
        break;
      default:
        data = this.sortMatches(data, "date", false)
        if (sort?.direction) 
          sort.direction = '';
    }

    return data
  }

  search(value: string): void {
    this.dataSource.data = this.matchessByCriteria(value);
  }

  private matchessByCriteria(criteria: string): Match[] {
    let list: Match[] = [];

    let crits = criteria.toUpperCase().trim().split(' ');

    if (crits[0].trim() != '') {
      list = this.getList().filter(it => this.matchesAllCriteria(crits, it));
    } else {
      list = this.getList();
    }

    list = this.sortTable(list, this.sort)

    return list;
  }

  private matchesAllCriteria(criteria: string[], match: Match): boolean {
    let value = true;
    
    criteria.forEach(it => {
      value = value && (
        match.home.toUpperCase().indexOf(it) > -1 ||
        match.away.toUpperCase().indexOf(it) > -1 ||
        match.attendees.filter(x => x.toUpperCase().indexOf(it) > -1).length > 0 ||
        match.arena.toUpperCase().indexOf(it) > -1 ||
        match.sport.toUpperCase().indexOf(it) > -1 ||
        match.city.toUpperCase().indexOf(it) > -1)
    })

    return value;
  }

  private sortMatches(data: Match[], column: string, asc: boolean = true): Match[] {
    return data.sort((a: Match, b: Match) => {
      let value1 = Match.getValue(column, a);
      let value2 = Match.getValue(column, b);
      if (value1 > value2) {
        return asc ? 1 : -1
      } else if (value1 < value2) {
        return asc ? -1 : 1
      } else {
        return 0
      }
    });
  }

  private getList(): Match[] {
    return _.cloneDeep(this.matchList);
  }
}
