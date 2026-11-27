import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SettingsPageComponent} from '../pages/settings-page/settings-page.component';

export const SETTINGS_DIALOG_ID = 'settings-modal';

@Injectable({
  providedIn: 'root'
})
export class SettingsDialogService {

  constructor(private dialog: MatDialog) {
  }

  /** Opens the settings popup, or hands back the one already open. */
  open(): MatDialogRef<SettingsPageComponent> {
    const existing = this.dialog.getDialogById(SETTINGS_DIALOG_ID);
    if (existing) {
      return existing;
    }

    return this.dialog.open(SettingsPageComponent, {
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
