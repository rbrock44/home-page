import {Component, HostBinding, computed, input, signal} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {GamesPerDate} from "../../models/games-per-date.model";
import {Game} from '../../models/game.model';
import {WindowService} from "../../services/window.service";
import {HomeApiService} from "../../services/home-api.service";
import {liveTime} from "../../constants/constants";

@Component({
    selector: 'app-sport-widget',
    templateUrl: './sport-widget.component.html',
    styleUrls: ['./sport-widget.component.scss']
})
export class SportWidgetComponent {
  readonly gamesPerDate = input(new GamesPerDate({games: []}));
  readonly isBasketball = input<boolean>(true);

  // a day paged to with the arrows; null means follow the live-refreshed input
  private readonly browsed = signal<GamesPerDate | null>(null);
  // "next:yyyyMMdd" / "previous:yyyyMMdd" - days with nothing further in that direction
  private readonly deadEnds = signal(new Set<string>());
  readonly loading = signal(false);
  readonly shown = computed(() => this.browsed() ?? this.gamesPerDate());
  readonly isBrowsing = computed(() => this.browsed() !== null);

  @HostBinding('style.display')
  get hostDisplay(): string {
    return this.shouldShow() && (this.gamesPerDate()?.games?.length ?? 0) > 0 ? '' : 'none';
  }

  constructor(
    public settingsService: SettingsService,
    private windowService: WindowService,
    private homeApiService: HomeApiService
  ) {
  }

  shouldShow(): boolean {
    return (this.isBasketball() ? this.settingsService.showBasketball : this.settingsService.showFootball);
  }

  canStep(forward: boolean): boolean {
    const day = this.shown()?.day;
    return !!day && !this.loading() && !this.deadEnds().has(this.deadEndKey(day, forward));
  }

  step(forward: boolean): void {
    if (!this.canStep(forward)) {
      return;
    }

    const day = this.shown().day!;
    this.loading.set(true);
    this.homeApiService.getAdjacentGameDay(this.isBasketball(), day, forward).subscribe({
      next: result => {
        this.loading.set(false);
        if (!result.day || (result.games?.length ?? 0) === 0) {
          this.deadEnds.update(ends => new Set(ends).add(this.deadEndKey(day, forward)));
          return;
        }
        // landing back on the live day hands control back to the refreshed input
        this.browsed.set(result.day === this.gamesPerDate()?.day ? null : result);
      },
      error: () => this.loading.set(false)
    });
  }

  backToCurrent(): void {
    this.browsed.set(null);
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

  private deadEndKey(day: string, forward: boolean): string {
    return `${forward ? 'next' : 'previous'}:${day}`;
  }
}
