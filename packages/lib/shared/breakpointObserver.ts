import type { ReactiveController, ReactiveControllerHost } from 'lit';

type Breakpoint = 'mobile' | 'tablet' | 'desktop';

const breakpointToMediaQuery: Record<Breakpoint, string> = {
  mobile: '(width <= 360px)',
  tablet: '(360px > width <= 760px)',
  desktop: '(760px > width)',
};

export class BreakpointObserver implements ReactiveController {
  private abortController = new AbortController();

  matches = false;

  constructor(
    private host: ReactiveControllerHost,
    private query: Breakpoint,
  ) {
    this.host.addController(this);
  }

  private setNewValue(matches: boolean) {
    this.matches = matches;
    this.host.requestUpdate();
  }

  hostConnected() {
    const mediaQuery = breakpointToMediaQuery[this.query];
    const mediaMatcher = window.matchMedia(mediaQuery);
    this.setNewValue(mediaMatcher.matches);

    mediaMatcher.addEventListener('change', (changeEvent) => this.setNewValue(changeEvent.matches), {
      signal: this.abortController.signal,
    });
  }

  hostDisconnected() {
    this.abortController.abort();
  }
}
