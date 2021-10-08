import { Channel, Subscriber } from "./Channel";

type Key = symbol | string | number;

export class PubSub {
  private channels: Record<Key, Channel<any>> = {};

  publish<T>(key: Key, message: T): void {
    this.channels[key].publish(message);
  }

  subscribe<T>(key: Key, subscriber: Subscriber<T>): void {
    this.getChannel<T>(key).subscribe(subscriber);
  }

  private getChannel<T>(key: Key): Channel<T> {
    return this.channels[key] || this.createChannel(key);
  }

  private createChannel<T>(key: Key): Channel<T> {
    const channel = new Channel<T>();
    this.channels = {
      ...this.channels,
      [key]: channel,
    };
    return channel;
  }
}
