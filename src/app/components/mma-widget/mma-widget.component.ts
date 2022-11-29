import {Component, Input} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {FightCard} from "../../models/fight-card.model";

@Component({
  selector: 'app-mma-widget',
  templateUrl: './mma-widget.component.html',
  styleUrls: ['./mma-widget.component.scss']
})
export class MmaWidgetComponent {
  @Input() fightCard: FightCard = new FightCard();

  constructor(public settingsService: SettingsService) {}
}
