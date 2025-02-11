// utils/debounce.ts
var debounce = (fn, delay) => {
  let accumulatedTime = 0;
  return (deltaTime, ...args) => {
    accumulatedTime += deltaTime;
    if (accumulatedTime >= delay) {
      fn(...args);
      accumulatedTime = 0;
    }
  };
};

// scripts/BeaconSample.ts
var delaySecond = 2;
var sendSignal = debounce(() => {
  $.state.messageBus?.send("publish", {
    messageType: "signal",
    channelId: $.state.channelId
  });
}, delaySecond);
$.onUpdate((deltaTimeSecond) => {
  sendSignal(deltaTimeSecond);
});
