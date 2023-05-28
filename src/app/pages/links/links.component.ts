import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-links-page',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinkComponent {
    constructor(private windowService: WindowService) {
  }

  homeAssistant(): void {
    const newUrl = `http://10.0.0.15:8123/`
    this.windowService.openBlank(newUrl);
  }

  urlNav(url: string): void {
    this.windowService.openBlank(url);
  }
}
