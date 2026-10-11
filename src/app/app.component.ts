import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Location} from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HeaderComponent, AlertComponent, RouterOutlet]
})
export class AppComponent {
  title = 'home-page';

  constructor(private router: Router, private location: Location) {
    this.slotHomeUnderDeepLink();
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
