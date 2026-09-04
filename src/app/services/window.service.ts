import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "../constants/constants";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  public setInterval(func: () => void, timeout:number) {
    window.setInterval(func, timeout);
  }

  public openBlank(url: string) {
    window.open(url, "_blank");
  }

  public getItem<T extends string | number | boolean>(item: string, defaultValue: T): string | T {
    const value: string = window.localStorage.getItem(item);
    return !isNullOrUndefined(value) ? value : defaultValue;
  }

  public setItem(item: Item) {
    window.localStorage.setItem(item.name, item.value);
  }
}
