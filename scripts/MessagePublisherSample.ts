import {
  messageBusInitialized,
  buttonInteracted,
  publish,
} from '../constants/messageType';

// Declare the StateProxy type for the Script. Do not forget to initialize the state in the onStart callback.
declare module '../types/cluster-script.d.ts' {
  interface StateProxy {
    /** Global message bus. */
    messageBus?: ItemHandle;
    /** Channel ID to publish message. */
    channelId: number;
  }
}

$.onStart(() => {
  const channelId = $.getStateCompat('this', 'channelId', 'integer');
  if (channelId === undefined) {
    $.log('channelId is not defined in the state.');
    $.state.channelId = 0;
    return;
  }
  $.state.channelId = channelId;
});

$.onReceive((messageType, _arg, sender) => {
  if (messageType === messageBusInitialized && sender instanceof ItemHandle) {
    $.state.messageBus = sender;
  }
});

$.onInteract((player) => {
  $.log(`interacted by player ${player.id}`);
  $.state.messageBus?.send(publish, {
    messageType: buttonInteracted,
    channelId: $.state.channelId,
    arg: { triggeredByPlayerId: player.id },
  });
});
