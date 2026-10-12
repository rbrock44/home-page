import { Injectable } from '@angular/core';
import { Match } from '../models/match.model';
import { MATCHES } from '../constants/constants-matches';
import { SearchableTableService } from './searchable-table.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService extends SearchableTableService<Match> {
  constructor() {
    super(MATCHES);
  }

  protected searchableText(match: Match): string[] {
    return [match.home, match.away, ...match.attendees, match.arena, match.sport, match.city];
  }
}
