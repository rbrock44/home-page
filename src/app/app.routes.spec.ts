import {TestBed} from '@angular/core/testing';
import {Location} from '@angular/common';
import {provideLocationMocks, SpyLocation} from '@angular/common/testing';
import {provideHttpClient, withXhr} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideRouter, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {RouterTestingHarness} from '@angular/router/testing';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {LinkComponent} from './pages/links/links.component';
import {ConcertComponent} from './pages/concerts/concerts.component';
import {MatchComponent} from './pages/match/match.component';

describe('routes', () => {
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(routes),
        provideLocationMocks(),
        provideHttpClient(withXhr()),
        provideHttpClientTesting(),
        provideNoopAnimations(),
      ]
    });
    location = TestBed.inject(Location);
  });

  [
    {url: '/', component: HomeComponent},
    {url: '/settings', component: SettingsPageComponent},
    {url: '/links', component: LinkComponent},
    {url: '/concerts', component: ConcertComponent},
    {url: '/matches', component: MatchComponent},
  ].forEach(({url, component}) => {
    it(`shows ${component.name} at ${url}`, async () => {
      const harness = await RouterTestingHarness.create();

      expect(await harness.navigateByUrl(url)).toBeInstanceOf(component);
    });
  });

  [
    {url: '/', title: "Ryan's Home Page"},
    {url: '/settings', title: "Settings – Ryan's Home Page"},
    {url: '/links', title: "Links – Ryan's Home Page"},
    {url: '/concerts', title: "Concerts – Ryan's Home Page"},
    {url: '/matches', title: "Matches – Ryan's Home Page"},
  ].forEach(({url, title}) => {
    it(`titles ${url} as "${title}"`, async () => {
      const harness = await RouterTestingHarness.create();

      await harness.navigateByUrl(url);

      expect(TestBed.inject(Title).getTitle()).toBe(title);
    });
  });

  it('sends unknown paths home', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/nope');

    expect(location.path()).toBe('/');
  });

  [
    {page: 'Settings', path: '/settings'},
    {page: 'Links', path: '/links'},
    {page: 'Concerts', path: '/concerts'},
    {page: 'Matches', path: '/matches'},
    {page: 'Home', path: '/'},
    {page: 'concerts', path: '/concerts'},
    {page: 'Nope', path: '/'},
    {page: '', path: '/'},
  ].forEach(({page, path}) => {
    it(`redirects legacy ?page=${page} to ${path}`, async () => {
      const harness = await RouterTestingHarness.create();

      await harness.navigateByUrl(`/?page=${page}`);

      expect(location.path()).toBe(path);
    });
  });

  it('redirects legacy page links on an unknown path', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/index.html?page=Links');

    expect(location.path()).toBe('/links');
  });

  it('keeps other params when redirecting a legacy page link', async () => {
    const harness = await RouterTestingHarness.create();

    await harness.navigateByUrl('/?page=Matches&prices');

    expect(location.path()).toBe('/matches?prices=');
  });

  it('slots home under a deep link so back stays on the site', async () => {
    TestBed.createComponent(AppComponent);

    await TestBed.inject(Router).navigateByUrl('/concerts');

    expect((location as SpyLocation).urlChanges).toEqual(['/concerts', 'replace: /', '/concerts']);
  });

  it('does not slot home under home', async () => {
    TestBed.createComponent(AppComponent);

    await TestBed.inject(Router).navigateByUrl('/?prices');

    expect((location as SpyLocation).urlChanges).not.toContain('replace: /');
  });
});
