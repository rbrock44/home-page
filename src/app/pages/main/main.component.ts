import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { HomeComponent } from '../home/home.component';
import { SettingsPageComponent } from '../settings-page/settings-page.component';
import { LinkComponent } from '../links/links.component';
import { ConcertComponent } from '../concerts/concerts.component';
import { MatchComponent } from '../match/match.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [HomeComponent, SettingsPageComponent, LinkComponent, ConcertComponent, MatchComponent]
})
export class MainComponent {
  constructor(
    public service: SettingsService
  ) { }
}
