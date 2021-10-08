import { Channel } from "./Channel";

describe("Test of Channel", function () {
  it("should allow to subscribe and communicate", function () {
    // GIVEN
    const channel = new Channel();
    const subscriber = jest.fn();
    channel.subscribe(subscriber);

    // WHEN
    channel.publish("Message");

    // THEN
    expect(subscriber).toHaveBeenCalledWith("Message");
  });

  it("should allow to subscribe (many subscribers) and communicate", function () {
    // GIVEN
    const channel = new Channel();
    const subscriber1 = jest.fn();
    const subscriber2 = jest.fn();
    channel.subscribe(subscriber1);
    channel.subscribe(subscriber2);

    // WHEN
    channel.publish("Message");

    // THEN
    expect(subscriber1).toHaveBeenCalledWith("Message");
    expect(subscriber2).toHaveBeenCalledWith("Message");
  });

  it("should allow to unsubscribe", function () {
    // GIVEN
    const channel = new Channel();
    const subscriber1 = jest.fn();
    const subscriber2 = jest.fn();
    const unsubscribe1 = channel.subscribe(subscriber1);
    channel.subscribe(subscriber2);

    // WHEN
    unsubscribe1();

    // THEN
    channel.publish("Message");
    expect(subscriber1).not.toHaveBeenCalled();
    expect(subscriber2).toHaveBeenCalledWith("Message");
  });
});
