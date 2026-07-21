import { Component, OnChanges, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatchService } from 'src/app/services/match.service';

@Component({
    selector: 'app-match-table',
    templateUrl: './match-table.component.html',
    styleUrls: ['./match-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MatchTableComponent implements OnChanges {
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayColumns: string[] = ['away', 'home', 'finalScore', 'sport', 'arena', 'city', 'date', 'attendees'];

  constructor(public matchService: MatchService) {
    this.matchService.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.matchService.sort = this.sort;
  }

  getFirstNames(attendees: string[]): string {
    return attendees.map(name => name.split(' ')[0]).join(', ');
  }
}
