import {
  messageBusInitialized,
  subscribe,
  unsubscribe,
  publish,
} from '../constants/messageType';

// Declare the StateProxy type for the Script. Do not forget to initialize the state in the onStart callback.
declare module '../types/cluster-script.d.ts' {
  interface StateProxy {
    /** Subscriptions to channels. */
    subscriptions: Partial<Record<number, (ItemHandle | PlayerHandle)[]>>;
  }
}

const radius = 100;

$.onStart(() => {
  const items = $.getItemsNear($.getPosition(), radius);
  items.forEach((item) => {
    item.send(messageBusInitialized, null);
  });
});

$.onReceive((messageType, arg, sender) => {
  if (messageType === subscribe) {
    if (
      typeof arg !== 'object' ||
      arg === null ||
      !('channelId' in arg) ||
      typeof arg['channelId'] !== 'number'
    ) {
      $.log('Invalid argument for subscribe message.');
      return;
    }
    const { channelId } = arg;
    $.state.subscriptions[channelId] = [
      ...($.state.subscriptions[channelId] ?? []),
      sender,
    ];
    return;
  }
  if (messageType === unsubscribe) {
    if (
      typeof arg !== 'object' ||
      arg === null ||
      !('channelId' in arg) ||
      typeof arg['channelId'] !== 'number'
    ) {
      $.log('Invalid argument for unsubscribe message.');
      return;
    }
    const { channelId } = arg;
    $.state.subscriptions[channelId] = $.state.subscriptions[channelId]?.filter(
      (item) => item !== sender,
    );
    return;
  }
  if (messageType === publish) {
    if (
      typeof arg !== 'object' ||
      arg === null ||
      !('messageType' in arg) ||
      typeof arg['messageType'] !== 'string' ||
      !('channelId' in arg) ||
      typeof arg['channelId'] !== 'number'
    ) {
      $.log('Invalid argument for publish message.');
      return;
    }
    const { messageType, channelId } = arg;
    const subscribers = $.state.subscriptions[channelId] ?? [];

    subscribers.forEach((subscriber) => {
      subscriber.send(messageType, arg['arg'] ?? null);
    });
  }
});
