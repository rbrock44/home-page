import {Component, Input} from '@angular/core';
import {Fight} from '../../models/fight.model';
import {WindowService} from "../../services/window.service";

@Component({
  selector: 'app-fight-card',
  templateUrl: './fight-card.component.html',
  styleUrls: ['./fight-card.component.scss']
})
export class FightCardComponent {
  @Input() fights: Fight[] = [];

  constructor(private windowService: WindowService) {}

  fightClick(fight: Fight): void {
    this.windowService.openBlank(fight.link);
  }

  getPerson(title: string, firstPerson: boolean = true): string {
    const vsIndex = title.indexOf("vs");
    if (title.length == 0) {
      return "";
    } else if (firstPerson) {
      return title.substring(0, vsIndex - 1).trim()
    } else {
      return title.substring(vsIndex + 3).trim()
    }
  }
}
