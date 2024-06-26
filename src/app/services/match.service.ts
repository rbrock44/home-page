import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { Match } from '../models/match.model';

const ryan: string = 'Ryan Brock'
const addie: string = 'Addie Evans'
const will: string = 'Will Curnell'
const zach: string = 'Zach Haynes'

const STL: string = 'STL'

const basketball: string = 'Basketball';
const baseball: string = 'Baseball';
const hockey: string = 'Hockey';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchList = [
    // games to find
    // peyton manning vs stl rams in stl, his last stl game

    // new Match('', '', '', '', '', '', '', []),
    //2024
    new Match('STL Cardinals', 'Arizona Diamondbacks', 'AZ 14-1', baseball, 'Busch Stadium', STL, '2024/04/23', [ryan, addie]),
    new Match('Memphis Grizzlies', 'Denver Nuggets', 'DEN 126-111', basketball, 'FedExForum', 'Memphis, Tennessee', '2024/03/14', [ryan, addie, will]),
    new Match('Memphis Grizzlies', 'LA Clippers', 'LA 128-119', basketball, 'FedExForum', 'Memphis, Tennessee', '2024/01/12', [ryan, addie, will]),

    //2023
    
    //2022

    //2021

    //2019
    new Match('STL Blues (Game 7 Stanley Cup)', 'Boston Bruins', 'STL 4-1', hockey, 'Busch Stadium', STL, '2019/06/12', [ryan, 'Sara Hovis', 'Billy Atkins', 'Sidhant Amatya', 'Brandon Clark']),
    new Match('Denver Nuggets (Game 7 Playoffs 1st Round)', 'San Antonio Spurs', 'DEN 90-86', basketball, 'Ball Arena', 'Denver, Colorado', '2019/04/27', [ryan, zach, 'Taylor (Zach roommate)']),
    
    //2016
    new Match('Team USA', 'Venezuala', 'USA 80-45', basketball, 'United Center', 'Chicago, IL', '2016/07/29', [ryan, 'Ryan Fortner', 'Nick Bollinger']),

    //2015
    new Match('STL Cardinals', 'Pittsburgh Pirates', 'STL 3-2', baseball, 'Busch Stadium', STL, '2015/05/03', [ryan, 'Bjorn Pruemer', 'Bjorns Friend']),

    //2013
    new Match('STL Cardinals', 'San Francisco Giants', 'STL 8-0', baseball, 'Busch Stadium', STL, '2013/06/01', [ryan, 'Dominic Hooper', 'Allen Collier', 'Chris Snider']),
  ]

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
