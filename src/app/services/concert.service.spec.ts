import {TestBed} from '@angular/core/testing';
import {MatSort} from '@angular/material/sort';
import {ConcertService} from "./concert.service";
import {Concert} from "../models/concert.model";

describe('ConcertService', () => {
  let service: ConcertService;

  const nirvana = new Concert('Nirvana', ['Mudhoney'], 'Delmar Hall', 'STL', '1993-10-21', ['Ryan Brock']);
  const pearlJam = new Concert('Pearl Jam', ['Sonic Youth'], 'The Pageant', 'KC', '2005-06-02', ['Addie Evans']);
  const alice = new Concert('Alice In Chains', ['Bush'], 'Hollywood Casino Amphitheatre', 'STL', '1999-01-14', ['Ryan Brock', 'Zach Haynes']);

  const sortWith = (active: string, direction: 'asc' | 'desc' | ''): MatSort => {
    const sort = new MatSort();
    sort.active = active;
    sort.direction = direction;
    return sort;
  };

  const names = (): string[] => service.dataSource.data.map(it => it.name);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertService);
    service.concertList = [nirvana, pearlJam, alice];
    service.sort = sortWith('', '');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('matches on concert name regardless of case', () => {
      service.search('nirvana');

      expect(names()).toEqual(['Nirvana']);
    });

    it('matches on city', () => {
      service.search('STL');

      expect(names().sort()).toEqual(['Alice In Chains', 'Nirvana']);
    });

    it('matches on an opener', () => {
      service.search('sonic');

      expect(names()).toEqual(['Pearl Jam']);
    });

    it('matches on an attendee', () => {
      service.search('zach');

      expect(names()).toEqual(['Alice In Chains']);
    });

    it('matches on location', () => {
      service.search('delmar');

      expect(names()).toEqual(['Nirvana']);
    });

    it('requires every space separated criterion to match', () => {
      service.search('STL zach');

      expect(names()).toEqual(['Alice In Chains']);
    });

    it('returns nothing when the criteria cannot all be met', () => {
      service.search('nirvana zach');

      expect(names()).toEqual([]);
    });

    it('returns the whole list for a blank search', () => {
      service.search('   ');

      expect(names().length).toBe(3);
    });

    it('does not mutate the backing list', () => {
      service.search('nirvana');

      expect(service.concertList.length).toBe(3);
    });
  });

  describe('sortTable', () => {
    it('sorts ascending on the active column', () => {
      const sorted = service.sortTable([nirvana, pearlJam, alice], sortWith('name', 'asc'));

      expect(sorted.map(it => it.name)).toEqual(['Alice In Chains', 'Nirvana', 'Pearl Jam']);
    });

    it('sorts descending on the active column', () => {
      const sorted = service.sortTable([nirvana, pearlJam, alice], sortWith('name', 'desc'));

      expect(sorted.map(it => it.name)).toEqual(['Pearl Jam', 'Nirvana', 'Alice In Chains']);
    });

    it('falls back to newest date first when there is no direction', () => {
      const sorted = service.sortTable([nirvana, pearlJam, alice], sortWith('name', ''));

      expect(sorted.map(it => it.date)).toEqual(['2005-06-02', '1999-01-14', '1993-10-21']);
    });

    it('falls back to newest date first when there is no sort at all', () => {
      const sorted = service.sortTable([nirvana, pearlJam, alice], null);

      expect(sorted.map(it => it.date)).toEqual(['2005-06-02', '1999-01-14', '1993-10-21']);
    });
  });

  describe('sortData', () => {
    it('reorders the data source in place', () => {
      service.dataSource.data = [nirvana, pearlJam, alice];

      service.sortData(sortWith('city', 'asc'));

      expect(service.dataSource.data.map(it => it.city)).toEqual(['KC', 'STL', 'STL']);
    });
  });
});
