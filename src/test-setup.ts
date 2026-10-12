// Jasmine reset spies and timers between tests; Vitest needs telling.
afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});
