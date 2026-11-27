import {TestBed} from '@angular/core/testing';
import {MatDialog} from '@angular/material/dialog';
import {SETTINGS_DIALOG_ID, SettingsDialogService} from './settings-dialog.service';
import {SettingsPageComponent} from '../pages/settings-page/settings-page.component';

describe('SettingsDialogService', () => {
  let service: SettingsDialogService;
  let dialog: MatDialog;

  beforeEach(() => {
    service = TestBed.inject(SettingsDialogService);
    dialog = TestBed.inject(MatDialog);
  });

  it('opens settings in a dialog that fits a small screen', () => {
    const open = vi.spyOn(dialog, 'open').mockReturnValue(undefined as never);

    service.open();

    expect(open.mock.calls[0][0]).toBe(SettingsPageComponent);
    expect(open.mock.calls[0][1]).toEqual(expect.objectContaining({
      id: SETTINGS_DIALOG_ID,
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 'calc(100vh - 32px)'
    }));
  });

  it('does not open a second copy', () => {
    const existing = {} as never;
    vi.spyOn(dialog, 'getDialogById').mockReturnValue(existing);
    const open = vi.spyOn(dialog, 'open');

    expect(service.open()).toBe(existing);
    expect(open).not.toHaveBeenCalled();
  });
});
