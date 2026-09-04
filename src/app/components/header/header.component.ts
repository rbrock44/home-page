import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { WindowService } from '../../services/window.service';
import { Pages } from '../../constants/constants';
import { Location } from '@angular/common';

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
            (click)="show(0)"
            (keydown.enter)="show(0)"
            (keydown.space)="show(0)"
            tabindex="0"
            [attr.aria-current]="service.show[0] ? 'page' : null"
            class="nav-bar-link"
            [class.active]="service.show[0]"
            data-home-nav>Home</a>
          <a mat-tab-link
            (click)="show(1)"
            (keydown.enter)="show(1)"
            (keydown.space)="show(1)"
            tabindex="0"
            [attr.aria-current]="service.show[1] ? 'page' : null"
            class="nav-bar-link"
            [class.active]="service.show[1]"
            data-settings-nav>Settings</a>
          @if (service.showLinks) {
            <a mat-tab-link
              (click)="show(2)"
              (keydown.enter)="show(2)"
              (keydown.space)="show(2)"
              tabindex="0"
              [attr.aria-current]="service.show[2] ? 'page' : null"
              class="nav-bar-link"
              [class.active]="service.show[2]"
              data-links-nav>Links</a>
          }
          <a mat-tab-link
            (click)="show(3)"
            (keydown.enter)="show(3)"
            (keydown.space)="show(3)"
            tabindex="0"
            [attr.aria-current]="service.show[3] ? 'page' : null"
            class="nav-bar-link"
            [class.active]="service.show[3]"
            data-concerts-nav>Concerts</a>
          <a mat-tab-link
            (click)="show(4)"
            (keydown.enter)="show(4)"
            (keydown.space)="show(4)"
            tabindex="0"
            [attr.aria-current]="service.show[4] ? 'page' : null"
            class="nav-bar-link"
            [class.active]="service.show[4]"
            data-concerts-nav>Matches</a>
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
    changeDetection: ChangeDetectionStrategy.Eager
})
export class HeaderComponent {

  constructor(
    private location: Location,
    private windowService: WindowService,
    public service: SettingsService
  ) {
  }

  show(index: number): void {
    const urlParam = Pages[index];
    if (urlParam !== 'Home') {
      const queryParams = new URLSearchParams()
      queryParams.set('page', urlParam);
      this.location.replaceState(`${location.pathname}?${queryParams.toString()}`);
    } else {
      this.location.replaceState(`${location.pathname}`);
    }
    this.service.setShow(index);
  }

  route(url: string): void {
    const newUrl = `https://${url}.ryan-brock.com/`;
    this.windowService.openBlank(newUrl);
  }

  homarr(): void {
    this.windowService.openBlank('http://10.0.0.150:7575/boards/Home');
  }
}
