import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SettingsPopupComponent} from '../components/settings-popup/settings-popup.component';

export const SETTINGS_DIALOG_ID = 'settings-modal';

@Injectable({
  providedIn: 'root'
})
export class SettingsDialogService {

  constructor(private dialog: MatDialog) {
  }

  /** Opens the settings popup, or hands back the one already open. */
  open(): MatDialogRef<SettingsPopupComponent> {
    const existing = this.dialog.getDialogById(SETTINGS_DIALOG_ID);
    if (existing) {
      return existing;
    }

    return this.dialog.open(SettingsPopupComponent, {
      id: SETTINGS_DIALOG_ID,
      panelClass: 'settings-dialog',
      ariaLabel: 'Settings',
      autoFocus: 'dialog',
      // fixed width on desktop, but never wider or taller than the screen minus a 16px gutter
      width: '752px',
      maxWidth: 'calc(100vw - 32px)',
      maxHeight: 'calc(100vh - 32px)'
    });
  }
}
