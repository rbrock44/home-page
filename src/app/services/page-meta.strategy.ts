import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

/**
 * Sets the page title and robots tag on every navigation, including during prerender. Routes
 * with `data: { noindex: true }` are kept out of search results and the sitemap.
 */
@Injectable({ providedIn: 'root' })
export class PageMetaStrategy extends TitleStrategy {
  constructor(private readonly title: Title, private readonly meta: Meta) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(title);
    }

    let route: ActivatedRouteSnapshot = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.meta.updateTag({ name: 'robots', content: route.data['noindex'] ? 'noindex' : 'index, follow' });
  }
}
