import {TestBed} from '@angular/core/testing';
import {AlertService} from "./alert.service";
import {Alert, AlertType} from "../models/alert.model";

describe('AlertService', () => {
  let service: AlertService;
  let received: Alert[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
    received = [];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('convenience methods', () => {
    beforeEach(() => {
      service.onAlert().subscribe(alert => received.push(alert));
    });

    it('emits a success alert carrying the message', () => {
      service.success('Settings reset');

      expect(received.length).toBe(1);
      expect(received[0].type).toBe(AlertType.Success);
      expect(received[0].message).toBe('Settings reset');
    });

    it('emits an error alert', () => {
      service.error('Something broke');

      expect(received[0].type).toBe(AlertType.Error);
      expect(received[0].message).toBe('Something broke');
    });

    it('emits an info alert', () => {
      service.info('Heads up');

      expect(received[0].type).toBe(AlertType.Info);
    });

    it('emits a warning alert', () => {
      service.warn('Action cancelled');

      expect(received[0].type).toBe(AlertType.Warning);
    });

    it('stamps the default id when none is given', () => {
      service.success('Saved');

      expect(received[0].id).toBe('default-alert');
    });

    it('carries options through to the alert', () => {
      service.success('Saved', {autoClose: false, keepAfterRouteChange: true});

      expect(received[0].autoClose).toBeFalse();
      expect(received[0].keepAfterRouteChange).toBeTrue();
    });

    it('does not let options override the type', () => {
      service.error('Broke', {type: AlertType.Success});

      expect(received[0].type).toBe(AlertType.Error);
    });
  });

  describe('onAlert filtering', () => {
    it('only delivers alerts matching the subscribed id', () => {
      service.onAlert('other-alert').subscribe(alert => received.push(alert));

      service.alert(new Alert({id: 'default-alert', message: 'ignored'}));
      service.alert(new Alert({id: 'other-alert', message: 'delivered'}));

      expect(received.length).toBe(1);
      expect(received[0].message).toBe('delivered');
    });
  });

  describe('clear', () => {
    it('emits an alert with no message for the default id', () => {
      service.onAlert().subscribe(alert => received.push(alert));

      service.clear();

      expect(received.length).toBe(1);
      expect(received[0].message).toBeUndefined();
    });
  });
});
