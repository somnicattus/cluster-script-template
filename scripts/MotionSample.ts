// Description: This script demonstrates how to move an object in a simple harmonic motion.

const amplitudeMeter = 1;
const frequencyHertz = 1;

const TAU = Math.PI * 2;

$.onStart(() => {
  $.state.origin = $.getPosition();
  $.state.phase = 0;
});

$.onUpdate((deltaTimeSecond) => {
  $.state.phase = ($.state.phase + deltaTimeSecond * frequencyHertz) % 1;

  $.setPosition(
    $.state.origin.add(
      new Vector3(0, Math.sin($.state.phase * TAU) * amplitudeMeter, 0),
    ),
  );
});
