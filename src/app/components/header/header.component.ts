import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { WindowService } from '../../services/window.service';
import { Pages } from '../../constants/constants';
import { Location } from '@angular/common';

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
                 (click)="homarr()"
                 class="nav-bar-link lengthened"
                 >Homarr</a>
              <a mat-tab-link
                 mat-theme="accent"
                 (click)="homarr()"
                 class="nav-bar-link shortened"
                 >Homarr</a>
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
    }
    this.service.setShow(index);
  }

  route(url: string): void {
    const newUrl = `https://${url}.ryan-brock.com/`;
    this.windowService.openBlank(newUrl);
  }

  homarr(mobile: boolean = false): void {
    const baseUrl = `http://10.0.0.150:7575/boards/`
    const newUrl = `Home`
    const mobileUrl = `Mobile`
    this.windowService.openBlank(newUrl + mobile ? mobileUrl : newUrl);
  }
}
