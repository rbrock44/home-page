import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { WindowService } from '../../services/window.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
          <a mat-tab-link
            routerLink="/settings"
            routerLinkActive="active"
            ariaCurrentWhenActive="page"
            class="nav-bar-link"
            data-settings-nav>Settings</a>
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
    public service: SettingsService
  ) {
  }

  route(url: string): void {
    const newUrl = `https://${url}.ryan-brock.com/`;
    this.windowService.openBlank(newUrl);
  }

  homarr(): void {
    this.windowService.openBlank('http://10.0.0.150:7575/boards/Home');
  }
}
