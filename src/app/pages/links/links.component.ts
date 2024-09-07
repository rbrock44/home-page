import { Component } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-links-page',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinkComponent {
  firstColumnLinks: Link[] = [
    new Link('Home Assistant', 'Assistant', 'http://10.0.0.15:8123/'),
    new Link('Bank of Missouri', '', 'https://my.bankofmissouri.com/login'),
    new Link('Marcus HYSA', 'HYSA', 'https://www.marcus.com/us/en/login'),
    new Link('Elan', '', 'https://www.myaccountaccess.com/onlineCard/login.do'),
    new Link('Chase', '', 'https://www.chase.com/business/login-emob'),
    new Link('Ameren', '', 'https://www.ameren.com/'),
    new Link('AT&T', '', 'https://caaid.att.com/isam/sps/static/signinRedirect.html'),
    new Link('Spectrum', '', 'https://www.spectrum.net/billing'),
    new Link('T. Price (GS 401k)', 'T. Price', 'https://www.troweprice.com/workplace/en/login.html?pdurl=/rws/account/participant/home'),
    new Link('Vanguard (Vizient 401k)', 'Vanguard', 'https://ownyourfuture.vanguard.com/home/login#/'),
    new Link('Flatbranch (Home Loan)', 'Flatbranch', 'https://flatbranchservicing.com/'),
  ]

  secondColumnLinks: Link[] = [
  ]

  constructor(private windowService: WindowService) {
  }

  urlNav(url: string): void {
    this.windowService.openBlank(url);
  }
}
