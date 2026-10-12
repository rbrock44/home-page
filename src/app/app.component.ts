import {Component, inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, Location} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [HeaderComponent, AlertComponent, RouterOutlet]
})
export class AppComponent {
  title = 'home-page';

  constructor(private router: Router, private location: Location) {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      this.slotHomeUnderDeepLink();
    }
  }

  /**
   * A Home entry is slotted in underneath a deep-linked page so browser/mouse back lands on
   * Home instead of leaving the site.
   */
  private slotHomeUnderDeepLink(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), take(1))
      .subscribe(event => {
        if (this.router.parseUrl(event.urlAfterRedirects).root.hasChildren()) {
          this.location.replaceState('/');
          this.location.go(event.urlAfterRedirects);
        }
      });
  }
}
