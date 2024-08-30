import {Component, Input} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from '../../models/game.model';
import {WindowService} from "../../services/window.service";
import {liveTime} from "../../constants/constants";

@Component({
  selector: 'app-sport-widget',
  templateUrl: './sport-widget.component.html',
  styleUrls: ['./sport-widget.component.scss']
})
export class SportWidgetComponent {
  @Input() gamesPerDate: GamesPerDate = new GamesPerDate({games: []});
  @Input() isBasketball: boolean = true;
  atSymbol: string = '@';

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
