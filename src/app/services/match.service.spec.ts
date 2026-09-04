import {TestBed} from '@angular/core/testing';
import {MatSort} from '@angular/material/sort';
import {MatchService} from "./match.service";
import {Match} from "../models/match.model";

describe('MatchService', () => {
  let service: MatchService;

  const blues = new Match('Blues', 'Bruins', '4-1', 'Hockey', 'Enterprise Center', 'STL', '2019-06-12', ['Ryan Brock']);
  const cards = new Match('Cardinals', 'Cubs', '3-2', 'Baseball', 'Busch Stadium', 'STL', '2021-07-04', ['Addie Evans']);
  const chiefs = new Match('Chiefs', 'Broncos', '27-24', 'Football', 'Arrowhead', 'KC', '2015-09-17', ['Ryan Brock', 'Zach Haynes']);

  const sortWith = (active: string, direction: 'asc' | 'desc' | ''): MatSort => {
    const sort = new MatSort();
    sort.active = active;
    sort.direction = direction;
    return sort;
  };

  const homes = (): string[] => service.dataSource.data.map(it => it.home);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchService);
    service.matchList = [blues, cards, chiefs];
    service.sort = sortWith('', '');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('matches on the home team regardless of case', () => {
      service.search('blues');

      expect(homes()).toEqual(['Blues']);
    });

    it('matches on the away team', () => {
      service.search('cubs');

      expect(homes()).toEqual(['Cardinals']);
    });

    it('matches on sport', () => {
      service.search('hockey');

      expect(homes()).toEqual(['Blues']);
    });

    it('matches on arena', () => {
      service.search('arrowhead');

      expect(homes()).toEqual(['Chiefs']);
    });

    it('matches on city', () => {
      service.search('STL');

      expect(homes().sort()).toEqual(['Blues', 'Cardinals']);
    });

    it('matches on an attendee', () => {
      service.search('zach');

      expect(homes()).toEqual(['Chiefs']);
    });

    it('requires every space separated criterion to match', () => {
      service.search('STL baseball');

      expect(homes()).toEqual(['Cardinals']);
    });

    it('returns nothing when the criteria cannot all be met', () => {
      service.search('hockey cubs');

      expect(homes()).toEqual([]);
    });

    it('returns the whole list for a blank search', () => {
      service.search('   ');

      expect(homes().length).toBe(3);
    });

    it('does not mutate the backing list', () => {
      service.search('blues');

      expect(service.matchList.length).toBe(3);
    });
  });

  describe('sortTable', () => {
    it('sorts ascending on the active column', () => {
      const sorted = service.sortTable([blues, cards, chiefs], sortWith('home', 'asc'));

      expect(sorted.map(it => it.home)).toEqual(['Blues', 'Cardinals', 'Chiefs']);
    });

    it('sorts descending on the active column', () => {
      const sorted = service.sortTable([blues, cards, chiefs], sortWith('home', 'desc'));

      expect(sorted.map(it => it.home)).toEqual(['Chiefs', 'Cardinals', 'Blues']);
    });

    it('falls back to newest date first when there is no direction', () => {
      const sorted = service.sortTable([blues, cards, chiefs], sortWith('home', ''));

      expect(sorted.map(it => it.date)).toEqual(['2021-07-04', '2019-06-12', '2015-09-17']);
    });

    it('falls back to newest date first when there is no sort at all', () => {
      const sorted = service.sortTable([blues, cards, chiefs], null);

      expect(sorted.map(it => it.date)).toEqual(['2021-07-04', '2019-06-12', '2015-09-17']);
    });
  });

  describe('sortData', () => {
    it('reorders the data source in place', () => {
      service.dataSource.data = [blues, cards, chiefs];

      service.sortData(sortWith('city', 'asc'));

      expect(service.dataSource.data.map(it => it.city)).toEqual(['KC', 'STL', 'STL']);
    });
  });
});
