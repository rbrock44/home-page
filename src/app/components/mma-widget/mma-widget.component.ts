import { Component, HostBinding, computed, input, signal } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import { HomeApiService } from "../../services/home-api.service";
import { FightCard } from "../../models/fight-card.model";
import { FightCardComponent } from '../fight-card/fight-card.component';

@Component({
    selector: 'app-mma-widget',
    templateUrl: './mma-widget.component.html',
    styleUrls: ['./mma-widget.component.scss'],
    imports: [FightCardComponent]
})
export class MmaWidgetComponent {
  readonly fightCard = input(new FightCard());

  // recent results + upcoming cards, oldest first; fetched on the first arrow click
  private readonly cards = signal<FightCard[] | null>(null);
  // index into `cards` paged to with the arrows; null means follow the live-refreshed input
  private readonly browsedIndex = signal<number | null>(null);
  readonly loading = signal(false);
  readonly shown = computed(() => {
    const index = this.browsedIndex();
    return index === null ? this.fightCard() : this.cards()![index];
  });
  readonly isBrowsing = computed(() => this.browsedIndex() !== null);

  @HostBinding('style.display')
  get hostDisplay(): string {
    return this.settingsService.showMma && (this.fightCard()?.main?.length ?? 0) > 0 ? '' : 'none';
  }

  constructor(
    public settingsService: SettingsService,
    private homeApiService: HomeApiService
  ) { }

  canStep(forward: boolean): boolean {
    if (this.loading()) {
      return false;
    }
    // until the list is loaded there's no way to know, so let the click find out
    return this.cards() === null || this.targetIndex(forward) !== -1;
  }

  step(forward: boolean): void {
    if (!this.canStep(forward)) {
      return;
    }

    if (this.cards() !== null) {
      this.goTo(this.targetIndex(forward));
      return;
    }

    this.loading.set(true);
    this.homeApiService.getAllFightCards().subscribe({
      next: cards => {
        this.loading.set(false);
        this.cards.set(cards ?? []);
        this.goTo(this.targetIndex(forward));
      },
      error: () => this.loading.set(false)
    });
  }

  backToCurrent(): void {
    this.browsedIndex.set(null);
  }

  addDay(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }

  private goTo(index: number): void {
    if (index === -1) {
      return;
    }
    // landing back on the live card hands control back to the refreshed input
    this.browsedIndex.set(this.isSameCard(this.cards()![index], this.fightCard()) ? null : index);
  }

  private targetIndex(forward: boolean): number {
    const cards = this.cards() ?? [];
    let current = this.browsedIndex();
    if (current === null) {
      current = cards.findIndex(card => this.isSameCard(card, this.fightCard()));
    }

    if (current !== -1) {
      const next = current + (forward ? 1 : -1);
      return next >= 0 && next < cards.length ? next : -1;
    }

    // the live card isn't in the list (e.g. dropped off both pages) - place it by date instead
    const anchor = Date.parse(this.fightCard()?.date ?? '');
    if (isNaN(anchor)) {
      return -1;
    }
    const times = cards.map(card => Date.parse(card.date ?? ''));
    if (forward) {
      return times.findIndex(time => time > anchor);
    }
    for (let i = times.length - 1; i >= 0; i--) {
      if (times[i] < anchor) {
        return i;
      }
    }
    return -1;
  }

  private isSameCard(a: FightCard, b: FightCard): boolean {
    return !!a.titleLink && a.titleLink === b.titleLink;
  }
}
