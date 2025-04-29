import {
  messageBusInitialized,
  signal,
  publish,
} from '../constants/messageType';
import { debounce } from '../utils/debounce';

const delaySecond = 2;

const sendSignal = debounce(() => {
  $.state.messageBus?.send(publish, {
    messageType: signal,
    channelId: $.state.channelId,
  });
}, delaySecond);

$.onUpdate((deltaTimeSecond) => {
  sendSignal(deltaTimeSecond);
});

$.onReceive((messageType, sender) => {
  if (messageType === messageBusInitialized && sender instanceof ItemHandle) {
    $.state.messageBus = sender;
  }
});
