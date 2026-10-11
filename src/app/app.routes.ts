import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LinkComponent } from './pages/links/links.component';
import { ConcertComponent } from './pages/concerts/concerts.component';
import { MatchComponent } from './pages/match/match.component';

// Old `/?page=<Name>` links, from before each page had its own route. Keys are lowercase.
const LEGACY_PAGES: Record<string, string> = {
  home: '',
  settings: 'settings',
  links: 'links',
  concerts: 'concerts',
  matches: 'matches',
};

/**
 * Sends old `/?page=<Name>` links to the page's own route, keeping any other params. An
 * unrecognised name lands on Home, as it did before, with the stale param dropped.
 */
export const redirectLegacyPage: CanActivateFn = route => {
  if (!route.queryParamMap.has('page')) {
    return true;
  }

  const path = LEGACY_PAGES[route.queryParamMap.get('page')!.toLowerCase()] ?? '';
  const { page, ...queryParams } = route.queryParams;
  return inject(Router).createUrlTree(['/', path], { queryParams });
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [redirectLegacyPage] },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'links', component: LinkComponent },
  { path: 'concerts', component: ConcertComponent },
  { path: 'matches', component: MatchComponent },
  { path: '**', redirectTo: '' },
];
