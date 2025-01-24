import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <div class="nav-bar-bar">
        <nav mat-tab-nav-bar>
          <div class="nav-bar-div">
            <div class="first-header-row">
              <a mat-tab-link
                mat-theme="accent"
                (click)="show(0)"
                class="nav-bar-link"
                data-home-nav>Home</a>
              <a mat-tab-link
                mat-theme="accent"
                (click)="show(1)"
                class="nav-bar-link"
                data-settings-nav>Settings</a>
              <a mat-tab-link
                mat-theme="accent"
                (click)="show(2)"
                class="nav-bar-link"
                data-links-nav>Links</a>
              <a mat-tab-link
                mat-theme="accent"
                (click)="show(3)"
                class="nav-bar-link"
                data-concerts-nav>Concerts</a>
              <a mat-tab-link
                mat-theme="accent"
                (click)="show(4)"
                class="nav-bar-link"
                data-concerts-nav>Matches</a>
            </div>
           <div class="second-header-row">
              <a mat-tab-link
                mat-theme="accent"
                (click)="route('directory')"
                 class="nav-bar-link"
                 >Directory</a>
              <a mat-tab-link
                 mat-theme="accent"
                 (click)="homeAssistant()"
                 class="nav-bar-link lengthened"
                 >Home Assistant</a>
              <a mat-tab-link
                 mat-theme="accent"
                 (click)="homeAssistant()"
                 class="nav-bar-link shortened"
                 >Assistant</a>
           </div>
          </div>
        </nav>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private windowService: WindowService,
    public service: SettingsService
  ) {
  }

  show(index: number): void {
    this.service.setShow(index);
  }

  route(url: string): void {
    const newUrl = `https://${url}.ryan-brock.com/`;
    this.windowService.openBlank(newUrl);
  }

  homeAssistant(): void {
    const newUrl = `http://10.0.0.15:8123/`
    this.windowService.openBlank(newUrl);
  }
}
