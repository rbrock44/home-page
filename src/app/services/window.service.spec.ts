import {TestBed} from '@angular/core/testing';
import {WindowService} from "./window.service";
import {Item} from "../models/item.model";

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowService);
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getItem', () => {
    it('returns the stored value when one is present', () => {
      window.localStorage.setItem('home-page-title', 'Console');

      expect(service.getItem('home-page-title', 'Home Page')).toBe('Console');
    });

    it('returns the default when nothing is stored', () => {
      expect(service.getItem('home-page-title', 'Home Page')).toBe('Home Page');
    });

    it('returns the default when the stored value is the string null', () => {
      window.localStorage.setItem('home-page-title', 'null');

      expect(service.getItem('home-page-title', 'Home Page')).toBe('Home Page');
    });

    it('returns the default when the stored value is the string undefined', () => {
      window.localStorage.setItem('home-page-title', 'undefined');

      expect(service.getItem('home-page-title', 'Home Page')).toBe('Home Page');
    });

    it('keeps a non string default when nothing is stored', () => {
      expect(service.getItem('home-page-refresh-rate', 60)).toBe(60);
      expect(service.getItem('home-page-show-links', false)).toBe(false);
    });

    it('reads back a stored value as a string', () => {
      window.localStorage.setItem('home-page-refresh-rate', '120');

      expect(service.getItem('home-page-refresh-rate', 60)).toBe('120');
    });
  });

  describe('setItem', () => {
    it('writes the item name and value to local storage', () => {
      service.setItem(new Item('home-page-color', '--blue-color-'));

      expect(window.localStorage.getItem('home-page-color')).toBe('--blue-color-');
    });

    it('round trips through getItem', () => {
      service.setItem(new Item('home-page-title', 'Dashboard'));

      expect(service.getItem('home-page-title', 'Home Page')).toBe('Dashboard');
    });
  });

  describe('openBlank', () => {
    it('opens the url in a new tab', () => {
      spyOn(window, 'open');

      service.openBlank('https://directory.ryan-brock.com/');

      expect(window.open).toHaveBeenCalledWith('https://directory.ryan-brock.com/', '_blank');
    });
  });

  describe('setInterval', () => {
    it('registers the callback with the given timeout', () => {
      spyOn(window, 'setInterval');
      const callback = () => undefined;

      service.setInterval(callback, 5000);

      expect(window.setInterval).toHaveBeenCalledWith(callback, 5000);
    });
  });
});
