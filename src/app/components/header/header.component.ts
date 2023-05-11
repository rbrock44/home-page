import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';

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
                (click)="showHome(true)"
                class="nav-bar-link"
                data-home-nav>Home</a>
              <a mat-tab-link
                mat-theme="accent"
                (click)="showHome(false)"
                class="nav-bar-link"
                data-settings-nav>Settings</a>
            </div>
           <div class="second-header-row">
              <a mat-tab-link
                mat-theme="accent"
                (click)="route('family-recipes')"
                 class="nav-bar-link lengthened"
                 >Family Recipes</a>
              <a mat-tab-link
                 mat-theme="accent"
                 (click)="route('family-recipes')"
                 class="nav-bar-link shortened"
                 >Recipes</a>
              <a mat-tab-link
                 mat-theme="accent"
                 (click)="route('scorekeeping-by-rounds')"
                 class="nav-bar-link lengthened"
                 >Scorekeeping By Rounds</a>
              <a mat-tab-link
                 mat-theme="accent"
                 (click)="route('scorekeeping-by-rounds')"
                 class="nav-bar-link shortened"
                 >Scorekeeping</a>
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
    private router: Router,
    public service: SettingsService
  ) {
  }

  showHome(show: boolean): void {
    this.service.showHome = show;
  }

  route(url: string): void {
    const newUrl = `https://rbrock44.github.io/${url}/`
    document.location.href = newUrl;
  }

  homeAssistant(): void {
    const newUrl = `http://10.0.0.15:8123/`
    document.location.href = newUrl;
  }
}
