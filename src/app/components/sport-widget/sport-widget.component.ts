import {Component, Input, HostBinding, ChangeDetectionStrategy} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from '../../models/game.model';
import {WindowService} from "../../services/window.service";
import {liveTime} from "../../constants/constants";

@Component({
    selector: 'app-sport-widget',
    templateUrl: './sport-widget.component.html',
    styleUrls: ['./sport-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SportWidgetComponent {
  @Input() gamesPerDate: GamesPerDate = new GamesPerDate({games: []});
  @Input() isBasketball: boolean = true;

  // Hidden widgets must leave the flex layout entirely, otherwise the host
  // element's own padding still occupies a slot and throws off centering
  // of whichever cards remain (see home.component.scss [data-content-div]).
  @HostBinding('style.display')
  get hostDisplay(): string {
    return this.shouldShow() && this.gamesPerDate?.games?.length > 0 ? '' : 'none';
  }

  constructor(
    public settingsService: SettingsService,
    private windowService: WindowService
  ) {
  }

  shouldShow(): boolean {
    return (this.isBasketball ? this.settingsService.showBasketball : this.settingsService.showFootball);
  }

  imgClick(game: Game, isHome: boolean = true): void {
    let url = isHome ? game.homeTeamLink : game.opponentTeamLink
    this.windowService.openBlank(url);
  }

  getImage(game: Game, isHome: boolean = true): String {
    return isHome ? game.home : game.opponentImageLink;
  }

  liveTime(time: string): string {
    return liveTime(time);
  }
}
