import type { ReactiveController, ReactiveControllerHost } from 'lit';

type SwipeState = {
  yPos: number;
  time: Date;
};

type Options = {
  signal: AbortSignal;
};

/**
 * Gives support for swiping an element off the screen.
 * To start the swipe listener, call the `startSwipeAwayListener`
 * and provide the element you wish to observe. If you want a specific
 * element within the element to function as the drag handle, decorate
 * it with a `[data-drag-handle]` attribute.
 */
export class SwipeAway implements ReactiveController {
  private draggedElement: HTMLElement | null = null;

  private abortController: AbortController | null = null;
  private startYPos: number | null = null;
  private prevEvent: SwipeState | null = null;
  private velocity = 0;

  private callbackFn: (() => void) | null = null;

  constructor(private host: ReactiveControllerHost) {
    this.host.addController(this);
  }

  hostDisconnected(): void {
    this.abortController?.abort();
  }

  startSwipeAwayListener(el: HTMLElement, callbackFn: typeof this.callbackFn, opts?: Partial<Options>) {
    this.abortController = new AbortController();
    this.callbackFn = callbackFn;
    this.draggedElement = el;

    /** If an external abort signal is provided, abort the event listeners either when that signal emits, or if our internal signal emits */
    const abortSignal = opts?.signal
      ? AbortSignal.any([opts.signal, this.abortController.signal])
      : this.abortController.signal;

    const dragHandle = el.querySelector<HTMLElement>('[data-drag-handle]') ?? el;
    dragHandle.addEventListener('mousemove', (event) => this.onMouseMove(event), { signal: abortSignal });
    dragHandle.addEventListener('touchmove', (event) => this.onMouseMove(event), { signal: abortSignal });
    dragHandle.addEventListener('mouseup', () => this.onMouseUp(), { signal: abortSignal });
    dragHandle.addEventListener('touchend', () => this.onMouseUp(), { signal: abortSignal });
  }

  private onMouseMove(event: MouseEvent | TouchEvent) {
    console.log('Here');
    if ((event as MouseEvent).buttons === 1 || (event as TouchEvent).type === 'touchmove') {
      event.preventDefault();

      const time = new Date();
      const y = (event as MouseEvent).screenY || (event as TouchEvent).touches[0].screenY;
      this.velocity =
        this.prevEvent !== null
          ? (y - this.prevEvent.yPos) / (this.prevEvent.time.getTime() - time.getTime())
          : 0;

      if (this.startYPos === null) {
        this.startYPos = y;
        this.draggedElement?.classList.add('dragging');
      }

      this.prevEvent = {
        yPos: y,
        time: time,
      };

      if (this.draggedElement) {
        this.draggedElement.style.bottom = `${Math.min(0, this.startYPos - y)}px`;
      }
    }
  }

  private onMouseUp() {
    this.startYPos = null;

    if (this.draggedElement) {
      this.draggedElement.classList.remove('dragging');
      this.draggedElement.style.bottom = '0px';
    }

    console.log(this.velocity);
    if (this.velocity < -0.1) {
      this.abortController?.abort();
      this.callbackFn?.();
    }

    this.velocity = 0;
  }
}
