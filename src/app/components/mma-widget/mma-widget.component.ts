import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import { FightCard } from "../../models/fight-card.model";

@Component({
    selector: 'app-mma-widget',
    templateUrl: './mma-widget.component.html',
    styleUrls: ['./mma-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MmaWidgetComponent {
  @Input() fightCard: FightCard = new FightCard();

  // See SportWidgetComponent: an empty host still carries the card's own
  // padding, which throws off centering when it's the only widget shown.
  @HostBinding('style.display')
  get hostDisplay(): string {
    return this.settingsService.showMma && this.fightCard?.main?.length > 0 ? '' : 'none';
  }

  constructor(public settingsService: SettingsService) { }

  addDay(dateString: string): string {
    const date = new Date(dateString);
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }
}
