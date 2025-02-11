import { debounce } from '../utils/debounce';

// Declare the StateProxy type for the Script. Do not forget to initialize the state in the onStart callback.
declare module '../types/cluster-script.d.ts' {
  interface StateProxy {
    /** Global message bus. */
    messageBus?: ItemHandle;
    /** Channel ID to publish message. */
    channelId: number;
  }
}

const delaySecond = 2;

const sendSignal = debounce(() => {
  $.state.messageBus?.send('publish', {
    messageType: 'signal',
    channelId: $.state.channelId,
  });
}, delaySecond);

$.onUpdate((deltaTimeSecond) => {
  sendSignal(deltaTimeSecond);
});

$.onReceive((messageType, sender) => {
  if (messageType === 'messageBusInitialized' && sender instanceof ItemHandle) {
    $.state.messageBus = sender;
  }
});
