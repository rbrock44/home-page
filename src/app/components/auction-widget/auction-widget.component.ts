import { Component, HostBinding, input } from '@angular/core';
import { Auction } from 'src/app/models/auction.model';
import { SettingsService } from "../../services/settings.service";
import { WindowService } from '../../services/window.service';

@Component({
    selector: 'app-auction-widget',
    templateUrl: './auction-widget.component.html',
    styleUrls: ['./auction-widget.component.scss']
})
export class AuctionWidgetComponent {
  readonly auctions = input<Auction[]>([]);

  @HostBinding('style.display')
  get hostDisplay(): string {
    return this.settingsService.showAuctions && this.auctions().length > 0 ? '' : 'none';
  }

  constructor(
    public settingsService: SettingsService,
    private windowService: WindowService
    ) { }

  addDay(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  }

  isBrucker(auction: Auction): boolean {
    return `${auction.service ?? ''} ${auction.name ?? ''}`.toLowerCase().includes('brucker');
  }

  isBruckerCape(auction: Auction): boolean {
    return this.isBrucker(auction) && `${auction.location ?? ''} ${auction.name ?? ''}`.toLowerCase().includes('cape girardeau');
  }

  navigate(url: string): void {
    this.windowService.openBlank(url);
  }
}
