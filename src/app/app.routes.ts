import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LinkComponent } from './pages/links/links.component';
import { ConcertComponent } from './pages/concerts/concerts.component';
import { MatchComponent } from './pages/match/match.component';

// Old `/?page=<Name>` links, from before each page had its own route.
const LEGACY_PAGES: Record<string, string> = {
  Settings: 'settings',
  Links: 'links',
  Concerts: 'concerts',
  Matches: 'matches',
};

/** Sends old `/?page=<Name>` links to the page's own route, keeping any other params. */
export const redirectLegacyPage: CanActivateFn = route => {
  const path = LEGACY_PAGES[route.queryParamMap.get('page') ?? ''];
  if (!path) {
    return true;
  }

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
