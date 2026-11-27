import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { WindowService } from '../../services/window.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SettingsDialogService } from '../../services/settings-dialog.service';

@Component({
    selector: 'app-header',
    template: `
    <header class="console-bar">
      <div class="console-inner">
        <div class="brand">
          <span class="brand-dot"></span>
          <span class="brand-text">{{service.title}}</span>
        </div>

        <nav class="primary-nav" mat-tab-nav-bar aria-label="Dashboard sections">
          <a mat-tab-link
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: true}"
            ariaCurrentWhenActive="page"
            class="nav-bar-link"
            data-home-nav>Home</a>
          @if (service.showLinks) {
            <a mat-tab-link
              routerLink="/links"
              routerLinkActive="active"
              ariaCurrentWhenActive="page"
              class="nav-bar-link"
              data-links-nav>Links</a>
          }
          <a mat-tab-link
            routerLink="/concerts"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            class="nav-bar-link"
            data-concerts-nav>Concerts</a>
          <a mat-tab-link
            routerLink="/matches"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            class="nav-bar-link"
            data-matches-nav>Matches</a>
        </nav>

        <nav class="secondary-nav" aria-label="External links">
          <a (click)="homarr()" (keydown.enter)="homarr()" tabindex="0" role="link"
             class="ext-link lengthened">Homarr</a>
          <a (click)="homarr()" (keydown.enter)="homarr()" tabindex="0" role="link"
             class="ext-link shortened">Homarr</a>
          <span class="ext-divider" aria-hidden="true">|</span>
          <a (click)="route('directory')" (keydown.enter)="route('directory')" tabindex="0" role="link"
             class="ext-link">Directory</a>
          <button type="button" class="icon-link" aria-label="Settings" title="Settings"
                  (click)="openSettings()" data-settings-nav>
            <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
              <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  `,
    styleUrls: ['./header.component.scss'],
    imports: [RouterLink, RouterLinkActive]
})
export class HeaderComponent {

  constructor(
    private windowService: WindowService,
    private settingsDialog: SettingsDialogService,
    public service: SettingsService
  ) {
  }

  openSettings(): void {
    this.settingsDialog.open();
  }

  route(url: string): void {
    const newUrl = `https://${url}.ryan-brock.com/`;
    this.windowService.openBlank(newUrl);
  }

  homarr(): void {
    this.windowService.openBlank('http://10.0.0.150:7575/boards/Home');
  }
}
