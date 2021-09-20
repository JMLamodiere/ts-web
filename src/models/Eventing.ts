type Callback = () => void;

export class Eventing {
  private events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = [...handlers, callback];
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
