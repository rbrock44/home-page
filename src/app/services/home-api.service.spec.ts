import {inject, TestBed} from '@angular/core/testing';
import {HomeApiService} from "./home-api.service";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import {environment} from "../../environments/environment";
import {GamesPerDate} from "../models/games-per-date.model";
import {FightCard} from "../models/fight-card.model";
import { provideHttpClient, withXhr } from '@angular/common/http';

describe('HomeApiService', () => {
  let service: HomeApiService;
  const expectedGames = new GamesPerDate({date: 'today'})
  const expectedFights = new FightCard({date: 'today'})

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [],
    imports: [],
    providers: [provideHttpClient(withXhr()), provideHttpClientTesting()]
}).compileComponents();
    service = TestBed.inject(HomeApiService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should call url for upcoming basketball games',
    inject([HttpTestingController, HomeApiService],
      (httpMock: HttpTestingController) => {
        const searchUrl = environment.homePageApiUrl + '/games-per-date/basketball/upcoming';

        service.getBasketballUpcoming().subscribe(games => {
          expect(expectedGames).toEqual(games);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedGames);
      })
  );

  it('should call url for basketball games today',
    inject([HttpTestingController, HomeApiService],
      (httpMock: HttpTestingController) => {
        const searchUrl = environment.homePageApiUrl + '/games-per-date/basketball/today';

        service.getBasketballToday().subscribe(games => {
          expect(expectedGames).toEqual(games);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedGames);
      })
  );

  it('should call url for upcoming football games',
    inject([HttpTestingController, HomeApiService],
      (httpMock: HttpTestingController) => {
        const searchUrl = environment.homePageApiUrl + '/games-per-date/football/upcoming';

        service.getFootballUpcoming().subscribe(games => {
          expect(expectedGames).toEqual(games);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedGames);
      })
  );

  it('should call url for football games today',
    inject([HttpTestingController, HomeApiService],
      (httpMock: HttpTestingController) => {
        const searchUrl = environment.homePageApiUrl + '/games-per-date/football/today';

        service.getFootballToday().subscribe(games => {
          expect(expectedGames).toEqual(games);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedGames);
      })
  );

  it('should call url for upcoming mma fights',
    inject([HttpTestingController, HomeApiService],
      (httpMock: HttpTestingController) => {
        const searchUrl = environment.homePageApiUrl + '/fight-card/upcoming';

        service.getMmaUpcoming().subscribe(fights => {
          expect(expectedFights).toEqual(fights);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedFights);
      })
  );

  it('should call url for mma fights today',
    inject([HttpTestingController, HomeApiService],
      (httpMock: HttpTestingController) => {
        const searchUrl = environment.homePageApiUrl + '/fight-card/today';

        service.getMmaToday().subscribe(fights => {
          expect(expectedFights).toEqual(fights);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedFights);
      })
  );

  [
    'abc',
    '123',
    'abc123'
  ].forEach(item => {
    it(`should call url for home media search: ${item}`,
      inject([HttpTestingController, HomeApiService],
        (httpMock: HttpTestingController) => {
          const searchUrl = environment.homePageApiUrl + `/home-media-search?criteria=${item}`;

          const expected = [
            'a',
            'b'
          ];
          service.searchMedia(item).subscribe(value => {
            expect(expected).toEqual(value);
          });

          const req = httpMock.expectOne(searchUrl);
          expect(req.request.method).toEqual('GET');
          req.flush(expected);
        })
    );
  });

  [
    {criteria: 'Fast & Furious', encoded: 'Fast%20%26%20Furious'},
    {criteria: 'C++', encoded: 'C%2B%2B'},
    {criteria: 'a#b', encoded: 'a%23b'},
  ].forEach(({criteria, encoded}) => {
    it(`should encode the media search term: ${criteria}`,
      inject([HttpTestingController],
        (httpMock: HttpTestingController) => {
          service.searchMedia(criteria).subscribe();

          httpMock.expectOne(environment.homePageApiUrl + `/home-media-search?criteria=${encoded}`).flush([]);
        })
    );
  });

});
