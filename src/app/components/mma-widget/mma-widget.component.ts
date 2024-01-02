import { Component, Input } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import { FightCard } from "../../models/fight-card.model";

@Component({
  selector: 'app-mma-widget',
  templateUrl: './mma-widget.component.html',
  styleUrls: ['./mma-widget.component.scss']
})
export class MmaWidgetComponent {
  @Input() fightCard: FightCard = new FightCard();

  constructor(public settingsService: SettingsService) { }

  addDay(dateString: string): string {
    const date = new Date(dateString);
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }
}
