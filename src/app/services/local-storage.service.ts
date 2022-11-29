import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {isNullOrUndefined} from "../constants/constants";
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public getItem(item: string, defaultValue: any): any {
    const value: string = window.localStorage.getItem(item);
    return !isNullOrUndefined(value) ? value : _.cloneDeep(defaultValue);
  }

  public setItem(item: Item) {
    window.localStorage.setItem(item.name, item.value);
  }
}
