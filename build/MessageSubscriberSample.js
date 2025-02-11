// scripts/MessageSubscriberSample.ts
$.onStart(() => {
  $.state.isVisible = true;
  const channelId = $.getStateCompat("this", "channelId", "integer");
  if (channelId === undefined) {
    $.log("channelId is not defined in the state.");
    $.state.channelId = 0;
    return;
  }
  $.state.channelId = channelId;
});
$.onReceive((messageType, _arg, sender) => {
  if (messageType === "messageBusInitialized") {
    sender.send("subscribe", { channelId: $.state.channelId });
  }
  if (messageType === "buttonInteracted") {
    if ($.state.isVisible)
      $.setVisiblePlayers([]);
    else
      $.clearVisiblePlayers();
  }
});
