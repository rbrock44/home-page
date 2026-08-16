import {liveTime} from "./constants";

export const HEADER = '[data-header-title]';

describe('liveTime', () => {
  it('returns LIVE for an empty time', () => {
    expect(liveTime('')).toBe('LIVE');
  });

  it('passes through a non-ISO status string unchanged', () => {
    expect(liveTime('CAR 14, BUF 29')).toBe('CAR 14, BUF 29');
    expect(liveTime('11:00 - 4th')).toBe('11:00 - 4th');
  });

  it('renders a raw UTC timestamp in the browser\'s local time, not the server timezone', () => {
    const isoTime = '2026-10-03T23:00Z';
    const expected = new Date(isoTime).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});

    const result = liveTime(isoTime);

    expect(result).toBe(expected);
    expect(result).not.toContain('EDT');
    expect(result).not.toBe(isoTime);
  });
});
