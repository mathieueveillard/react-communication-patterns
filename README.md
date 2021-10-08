# React pub sub

## Why

When trying to have React components communicate, one can use the following patterns:

- Common ancestor communication: components communicate via callback props and props through their common ancestor. Quite systematic, but doesn't scale at all (brothers is OK, but cousins, hey!)
- Single source of truth, with implementations such as [Redux](https://redux.js.org/) or [Mobx](https://mobx.js.org/README.html). Quite systematic as well, but a tedious setup, lots of decisions to make and a question: should this piece of data live in the global state? Often, the answer is "no".

Hence one could wish a more direct, "peer to peer" and reactive communication, as in [Backbone's events](https://backbonejs.org/#Events) and [Angular's services](https://angular.io/tutorial/toh-pt4).

## The gist

Let's first define a `Channel` (observer pattern):

```tsx
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
```

Then allow communication through many channels:

```tsx
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
```

Finally, provide facilies to use in React's components (context, hook and HOC):

```tsx
export const pubsub = new PubSub();
export const PubSubContext = React.createContext(pubsub);
```

```tsx
export function usePubSub() {
  const pubsub = React.useContext(PubSubContext);
  return {
    pubsub,
  };
}
```

```tsx
interface Props {
  children: string | React.ReactElement | React.ReactElement[];
}

function WithPubSub({ children }: Props): React.ReactElement {
  return (
    <PubSubContext.Provider value={pubsub}>{children}</PubSubContext.Provider>
  );
}
```

## Usage

Assuming 2 components `Alice` and `Bob` that need to communicate:

```tsx
function App(): React.ReactElement {
  return (
    <WithPubSub>
      <Alice />
      <Bob />
    </WithPubSub>
  );
}
```

```tsx
function Alice(): React.ReactElement {
  const { pubsub } = usePubSub();

  function sendMessage(): void {
    pubsub.publish("AliceAndBobChannel", "Hello world!");
  }

  return (
    <div>
      <h1>Alice</h1>
      <button onClick={sendMessage}>Say hello!</button>
    </div>
  );
}
```

```tsx
function Bob(): React.ReactElement {
  const [message, setMessage] = React.useState("");

  const { pubsub } = usePubSub();

  React.useEffect(
    function () {
      pubsub.subscribe("AliceAndBobChannel", setMessage);
    },
    [pubsub]
  );

  return (
    <div>
      <h1>Bob</h1>
      {message && <p>I got a message: "{message}"</p>}
    </div>
  );
}
```

## Feedback?

I would love to hear your feedback. Use cases? Improvements?
