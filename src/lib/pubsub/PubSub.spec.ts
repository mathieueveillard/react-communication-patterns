import { PubSub } from "./PubSub";

describe("Test suite", function () {
  it("should allow communication through a channel (implicit creation on subscribe)", function () {
    // GIVEN
    const pubsub = new PubSub();

    const channel = Symbol();
    const subscriber = jest.fn();
    pubsub.subscribe(channel, subscriber);

    // WHEN
    pubsub.publish(channel, "Message");

    // THEN
    expect(subscriber).toHaveBeenCalledWith("Message");
  });

  it("should allow communication through unrelated channels", function () {
    // GIVEN
    const pubsub = new PubSub();

    const channel1 = Symbol();
    const subscriber1 = jest.fn();
    pubsub.subscribe(channel1, subscriber1);

    const channel2 = Symbol();
    const subscriber2 = jest.fn();
    pubsub.subscribe(channel2, subscriber2);

    // WHEN
    pubsub.publish(channel1, "Message");

    // THEN
    expect(subscriber1).toHaveBeenCalledWith("Message");
    expect(subscriber2).not.toHaveBeenCalled();
  });
});
