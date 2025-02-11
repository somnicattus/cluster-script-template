// constants/messageType.ts
var messageBusInitialized = "messageBusInitialized";
var subscribe = "subscribe";
var unsubscribe = "unsubscribe";
var publish = "publish";
var signal = "signal";
var buttonInteracted = "buttonInteracted";

// scripts/MessagePublisherSample.ts
$.onStart(() => {
  const channelId = $.getStateCompat("this", "channelId", "integer");
  if (channelId === undefined) {
    $.log("channelId is not defined in the state.");
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
    arg: { triggeredByPlayerId: player.id }
  });
});
