import {async, inject, TestBed} from '@angular/core/testing';
import {HomeApiService} from "./home-api.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../environments/environment";
import {GamesPerDate} from "../models/games-per-date.model";
import {FightCard} from "../models/fight-card.model";

describe('HomeApiService', () => {
  let service: HomeApiService;
  const expectedGames = new GamesPerDate({date: 'today'})
  const expectedFights = new FightCard({date: 'today'})

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
    }).compileComponents();
    service = TestBed.get(HomeApiService);
  }));

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
        const searchUrl = environment.homePageApiUrl + '/games-per-date/fight-card/upcoming';

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
        const searchUrl = environment.homePageApiUrl + '/games-per-date/fight-card/today';

        service.getMmaToday().subscribe(fights => {
          expect(expectedFights).toEqual(fights);
        });

        const req = httpMock.expectOne(searchUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedFights);
      })
  );
});
