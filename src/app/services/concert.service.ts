import { Injectable } from '@angular/core';
import { Concert } from '../models/concert.model';
import { CONCERTS } from '../constants/constants-concerts';
import { SearchableTableService } from './searchable-table.service';

@Injectable({
  providedIn: 'root'
})
export class ConcertService extends SearchableTableService<Concert> {
  constructor() {
    super(CONCERTS);
  }

  protected searchableText(concert: Concert): string[] {
    return [concert.name, ...concert.openers, ...concert.attendees, concert.location, concert.city];
  }
}
