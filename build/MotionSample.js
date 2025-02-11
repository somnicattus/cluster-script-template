// scripts/MotionSample.ts
var amplitudeMeter = 1;
var frequencyHertz = 1;
var TAU = Math.PI * 2;
$.onStart(() => {
  $.state.origin = $.getPosition();
  $.state.phase = 0;
});
$.onUpdate((deltaTimeSecond) => {
  $.state.phase = ($.state.phase + deltaTimeSecond * frequencyHertz) % 1;
  $.setPosition($.state.origin.clone().add(new Vector3(0, Math.sin($.state.phase * TAU) * amplitudeMeter, 0)));
});
