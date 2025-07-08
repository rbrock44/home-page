export const RESET_EVERYTHING_MESSAGE: string = 'This will reset everything to the default settings.';
export const ACTION_CANCELLED_MESSAGE: string = 'Action Cancelled.';
export const RESET_SETTINGS_SUCCESS_MESSAGE: string = 'Setting reset successfully.';
export const APPLY_SETTING_SUCCESS_MESSAGE: string = 'Settings applied successfully.';
export const PERFORM_THIS_ACTION: string = 'Are you sure you want to perform this action?';

export const COLOR_OPTIONS = [
  {
    name: 'Black',
    value: '--black-color-'
  },
  {
    name: 'Blue',
    value: '--blue-color-'
  },
  {
    name: 'Gray',
    value: '--gray-color-'
  },
  {
    name: 'Gray Dark',
    value: '--gray-dark-color-'
  },
  {
    name: 'Green',
    value: '--green-color-'
  },
  {
    name: 'Orange',
    value: '--orange-color-'
  },
  {
    name: 'Pink',
    value: '--pink-color-'
  },
  {
    name: 'Purple',
    value: '--purple-color-'
  },
  {
    name: 'Red',
    value: '--red-color-'
  },
  {
    name: 'Yellow',
    value: '--yellow-color-'
  },
  {
    name: 'White',
    value: '--white-color-'
  }
];

export const TITLE_DEFAULT = 'Home Page';
export const COLOR_DEFAULT = '--blue-color-';
export const REFRESH_RATE_DEFAULT = 60;
export const SHOW_SPORTS_DEFAULT = true;
export const WHICH_SELECTION_DEFAULT = false;
export const TODAY: string = 'Today';
export const UPCOMING: string = 'Upcoming';

export function isNullOrUndefined(str: string): boolean {
  return str == null || str === 'undefined' || str === 'null';
}

export function toBoolean(value): boolean {
  switch (value) {
    case true:
    case 'true':
    case 1:
    case '1':
    case 'on':
    case 'yes':
      return true;
    default:
      return false;
  }
}

export function liveTime(time: string): string {
  if (time.length > 0) {
    return time;
  } else {
    return 'LIVE'
  }
}

export function monthToIndex(month: string) {
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  return monthNames.indexOf(month);
}

export enum Pages {
 Home,
 Settings,
 Links,
 Concerts,
 Matches
}
