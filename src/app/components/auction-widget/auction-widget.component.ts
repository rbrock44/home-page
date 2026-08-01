import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { Auction } from 'src/app/models/auction.model';
import { SettingsService } from "../../services/settings.service";
import { WindowService } from '../../services/window.service';

@Component({
    selector: 'app-auction-widget',
    templateUrl: './auction-widget.component.html',
    styleUrls: ['./auction-widget.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AuctionWidgetComponent {
  @Input() auctions: Auction[] = [];

  @HostBinding('style.display')
  get hostDisplay(): string {
    return this.settingsService.showAuctions && this.auctions.length > 0 ? '' : 'none';
  }

  constructor(
    public settingsService: SettingsService,
    private windowService: WindowService
    ) { }

  addDay(dateString: string): string {
    const date = new Date(dateString);
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }

  navigate(url: string): void {
    this.windowService.openBlank(url);
  }
}
