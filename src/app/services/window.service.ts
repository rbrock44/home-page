import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {isNullOrUndefined} from "../constants/constants";
import {Item} from "../models/item.model";

// Pages are prerendered at build time, where there is no window. Everything here falls back to
// a no-op or the default so the prerendered page renders with default settings.
@Injectable({
  providedIn: 'root'
})
export class WindowService {
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  public setInterval(func: () => void, timeout:number): number | undefined {
    return this.isBrowser ? window.setInterval(func, timeout) : undefined;
  }

  public clearInterval(id: number | undefined) {
    if (this.isBrowser) {
      window.clearInterval(id);
    }
  }

  /** Calls `listener` with `document.hidden` whenever the tab is hidden or shown. Returns a function that stops listening. */
  public onVisibilityChange(listener: (hidden: boolean) => void): () => void {
    if (!this.isBrowser) {
      return () => undefined;
    }

    const handler = () => listener(document.hidden);
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }

  public openBlank(url: string) {
    window.open(url, "_blank");
  }

  public hasQueryParam(name: string): boolean {
    return this.isBrowser && new URLSearchParams(window.location.search).has(name);
  }

  public getItem<T extends string | number | boolean>(item: string, defaultValue: T): string | T {
    const value: string | null = this.isBrowser ? window.localStorage.getItem(item) : null;
    return isNullOrUndefined(value) ? defaultValue : value!;
  }

  public setItem(item: Item) {
    if (this.isBrowser) {
      window.localStorage.setItem(item.name, item.value);
    }
  }

  public clearStorage() {
    if (this.isBrowser) {
      window.localStorage.clear();
    }
  }
}
