// Description: This script demonstrates how to move an object in a simple harmonic motion.

// Declare the StateProxy type for the Script. Do not forget to initialize the state in the onStart callback.
declare module '../types/cluster-script.d.ts' {
  interface StateProxy {
    /** Origin position of the object. */
    origin: Vector3;
    /** Current phase of the motion. Ranges from 0 to 1. */
    phase: number;
  }
}

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
    $.state.origin
      .clone()
      .add(new Vector3(0, Math.sin($.state.phase * TAU) * amplitudeMeter, 0)),
  );
});
