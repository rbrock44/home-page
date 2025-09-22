import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { Link } from '../../models/link.model';
import { LINKS_FIRST_COLUMN, LINKS_SECOND_COLUMN } from 'src/app/constants/constants';

@Component({
  selector: 'app-links-page',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinkComponent {
  firstColumnLinks: Link[] = LINKS_FIRST_COLUMN;
  secondColumnLinks: Link[] = LINKS_SECOND_COLUMN

  constructor(private windowService: WindowService) {
  }

  urlNav(url: string): void {
    this.windowService.openBlank(url);
  }
}
