import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public now(): number {
    return Date.now()
  }
}
