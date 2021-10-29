export type Subscriber<T> = (t: T) => void;

export class Channel<T> {
  private subscribers: Subscriber<T>[] = [];

  publish(t: T): void {
    function invoke(subscriber: Subscriber<T>): void {
      subscriber(t);
    }
    this.subscribers.forEach(invoke);
  }

  subscribe(subscriber: Subscriber<T>): () => void {
    const index = this.subscribers.length;
    this.subscribers = [...this.subscribers, subscriber];
    const ref = this;
    return function (): void {
      ref.subscribers.splice(index, 1);
    };
  }
}
