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

        <nav class="primary-nav" mat-tab-nav-bar>
          <a mat-tab-link
            (click)="show(0)"
            class="nav-bar-link"
            [class.active]="service.show[0]"
            data-home-nav>Home</a>
          <a mat-tab-link
            (click)="show(1)"
            class="nav-bar-link"
            [class.active]="service.show[1]"
            data-settings-nav>Settings</a>
          @if (service.showLinks) {
            <a mat-tab-link
              (click)="show(2)"
              class="nav-bar-link"
              [class.active]="service.show[2]"
              data-links-nav>Links</a>
          }
          <a mat-tab-link
            (click)="show(3)"
            class="nav-bar-link"
            [class.active]="service.show[3]"
            data-concerts-nav>Concerts</a>
          <a mat-tab-link
            (click)="show(4)"
            class="nav-bar-link"
            [class.active]="service.show[4]"
            data-concerts-nav>Matches</a>
        </nav>

        <nav class="secondary-nav">
          <a (click)="homarr()" class="ext-link lengthened">Homarr</a>
          <a (click)="homarr()" class="ext-link shortened">Homarr</a>
          <span class="ext-divider">|</span>
          <a (click)="route('directory')" class="ext-link">Directory</a>
        </nav>
      </div>
    </header>
  `,
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
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
