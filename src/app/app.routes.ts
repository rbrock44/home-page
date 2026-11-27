import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsDialogService } from './services/settings-dialog.service';
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

/**
 * Settings is a popup now, not a page. Old `/settings` links land on Home with the popup open.
 */
export const openSettingsPopup: CanActivateFn = () => {
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
    inject(SettingsDialogService).open();
  }
  return inject(Router).createUrlTree(['/']);
};

const SITE_TITLE = "Ryan Brock's Home Page";

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [redirectLegacyPage], title: SITE_TITLE },
  { path: 'settings', canActivate: [openSettingsPopup], children: [] },
  { path: 'links', component: LinkComponent, title: `Links – ${SITE_TITLE}`, data: { noindex: true } },
  { path: 'concerts', component: ConcertComponent, title: `Concerts – ${SITE_TITLE}` },
  { path: 'matches', component: MatchComponent, title: `Matches – ${SITE_TITLE}` },
  { path: '**', redirectTo: '' },
];
