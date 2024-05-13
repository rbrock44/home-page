import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Concert } from '../models/concert.model';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

const ryan: string = 'Ryan Brock'
const addie: string = 'Addie Evans'
const brandon: string = 'Brandon Clark'
const aaron: string = 'Aaron Braswell'
const zach: string = 'Zach Haynes'

const STL: string = 'STL'
const delmarHall: string = 'Delmar Hall'
const hollywoodAmphitheater: string = 'Hollywood Casino Amphitheatre'

@Injectable({
  providedIn: 'root'
})
export class ConcertService {
  concertList = [
    // new Concert('', [], '', '', '', []),
    //2024
    new Concert('Mt. Joy', [''], 'Ascend Amphitheater', 'Nashville, TN', '2024/09/24', [ryan, addie]),
    new Concert('King Gizzard and the Lizard Wizard', [''], 'The Factory', STL, '2024/09/05', [ryan, addie]),
    new Concert('Green Day', [''], hollywoodAmphitheater, STL, '2024/08/14', [ryan, addie]),
    new Concert('Bush', ['Candlebox'], 'STL Music Park', STL, '2024/08/10', [ryan, addie]),
    new Concert('Phish', [''], 'Chaifetz Arena', STL, '2024/07/30', [ryan, addie]),
    new Concert('Portugal The Man', ['Reyna Tropical'], 'The Pageant', STL, '2024/05/06', [ryan, addie]),
    new Concert('Greta van Fleet', ['Geese'], 'Chaifetz Arena', STL, '2024/04/27', [ryan, addie, 'Abagail Estes', 'Ty Householder']),
    new Concert('Hannah Berner', ['Sara Huntington'], 'The Factory', STL, '2024/04/17', [ryan, addie]),

    //2023
    new Concert('Zeds Dead', ['Rusko', 'Heyz'], 'The Factory', STL, '2023/12/29', [ryan, addie]),
    new Concert('Dirty Honey', ['Austin Meade'], 'The Hawthorn', STL, '2023/12/15', [ryan, addie]),
    new Concert('The Urge', ['Tree One Four', 'Wisemary'], 'The Pageant', STL, '2023/11/24', [ryan, addie, brandon]),
    new Concert('Mt. Joy', ['flipturn'], 'Ascend Amphitheater', 'Nashville, TN', '2023/10/21', [ryan, addie]),
    new Concert('Hannah Berner', ['Sara Huntington'], 'The Truman', 'Kansas City, MO', '2023/10/20', [ryan, addie]),
    new Concert('Mt. Joy', ['flipturn'], 'STL Music Park', STL, '2023/08/15', [ryan, addie]),
    new Concert('Candlebox', ['Judah Taylor', 'Rubikon'], delmarHall, STL, '2023/08/13', [ryan, addie, brandon]),
    new Concert('Ghost', ['Amon Amarth'], hollywoodAmphitheater, STL, '2023/08/11', [ryan, addie, 'Jonathan Brock']),
    new Concert('Nickelback', ['Brantley Gilbert'], hollywoodAmphitheater, STL, '2023/08/03', [ryan, addie, brandon]),
    new Concert('Paramore', ['The Linda Lindas', 'Foals'], 'Enterprise Center', STL, '2023/07/30', [ryan, addie, 'Natalie Clark', brandon]),
    new Concert('Taylor Swift', ['MUNA', 'Gracie Abrams'], 'Empower Field at Mile High', 'Denver, Colorado', '2023/07/15', [ryan, addie]),
    new Concert('String Cheese Incident', ['ft. John Fogerty'], 'Red Rock Amphitheater', 'Morrison, Colorado', '2023/07/14', [ryan, addie, zach]),
    new Concert('The Blue Stones', ['The Velveeters'], delmarHall, STL, '2023/05/24', [ryan, addie, brandon]),
    new Concert('Aries Spears', [], 'Heliem Comedy Club', 'STL', '2023/01/06', [ryan, addie, 'Sara Snider', 'Tanya', 'Alivia Collier']),

    //2022
    new Concert('Black Pistol Fire', ['Shooks'], delmarHall, STL, '2022/08/09', [ryan, addie]),

    //2021
    new Concert('Korn', ['Staind'], hollywoodAmphitheater, STL, '2021/09/05', [ryan, addie, brandon, 'Michael Shouse']),
    new Concert('Foo Fighters', ['Radkey'], hollywoodAmphitheater, STL, '2021/08/03', [ryan, addie, brandon, aaron]),
    new Concert('Skillet', ['Jordan Feliz', 'Colton Dixon'], 'Drive In', 'Chaffee, Missouri', '2021/05/23', [ryan, brandon, aaron, 'Natalie Clark', 'Michael Shouse', 'Will Curnell']),

    //2019
    new Concert('Rob Thomas', ['John K'], 'Ballpark Village', STL, '2019/12/07', [ryan, brandon]),
    new Concert('Rusko', ['Cromatik'], 'The Old Rock House', STL, '2019/11/27', [ryan, zach, 'Sara Hovis', 'Ariel ']),
    new Concert('Nick Offerman', [], 'Stiefel', STL, '2019/11/07', [ryan, 'Katilyn Wieberg']),
    new Concert('Sluggtopia III', ['Kill The Noise', 'Rusko', 'Snails'], 'Red Rock Amphitheater', 'Morrison, Colorado', '2019/10/04', [ryan, zach, 'Ray', 'Ryan', 'Nick', '']),
    new Concert('Halestorm', ['Godsmack'], 'Show Me Center', 'Cape Girardeau', '2019/10/27', [ryan, brandon]),
    new Concert('Wayback Pointfest', ['Cowboy Mouth', 'Stir', 'Goldfinger', 'Living Colour', 'Gin Blossoms', 'Everclear', 'The Urge', 'Collective Soul'], hollywoodAmphitheater, STL, '2019/08/31', [ryan, brandon, 'Kaitlyn Wieberg']),
    new Concert('Rob Thomas', ['Abby Anderson'], 'Breese Stevens Field', 'Madison, Wisconsin', '2019/06/07', [ryan, 'Landon Robert']),
    new Concert('Sabroso Fest', ['Kobayashi (the eater)', 'Dwarves', 'Black Falg', 'Strung Out', 'The Vandals', 'Bad Religion', 'The Offspring'], 'Fiddlers Green Amphitheatre', 'Eaglewood, Colorado', '2019/04/28', [ryan, zach]),

    new Concert('Flying Lotus in 3D', ['So So Topic'], 'EXDO Event Center', 'Denver, Colorado', '2017/11/17', [ryan, zach, 'Destanie Raines']),

    new Concert('Shinedown', ['Sevendust', 'Breaking Benjamin'], 'Show Me Center', 'Cape Girardeau, MO', '2015/11/15', [ryan, 'Bjorn Preumer', 'Brett Preumer']),
    

    new Concert('Judas Priest', ['Whitesnake'], 'The Family Arena', STL, '2009/07/01', [ryan, zach]),
    new Concert('3 Doors Down', ['12 Stones', 'Sick Puppies'], 'Black River Coliseum', 'Poplar Bluff, Missouri', '2008/04/02', [ryan, 'Catrina Stone', 'James Summers']),
  ]

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
