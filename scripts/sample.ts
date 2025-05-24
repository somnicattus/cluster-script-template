// Description: This script demonstrates how to move an object in a simple harmonic motion.

import { debounce } from "../tools/debounce";

const TAU = Math.PI * 2;

const amplitudeMeter = 1;
const frequencyHertz = 1;

$.onUpdate(debounce((deltaTimeSecond) => {
  if(!$.state.initialized) {
    $.state.initialized = true;
    $.state.origin = $.getPosition();
    $.state.phase = 0;
  }
  $.state.phase = ($.state.phase + deltaTimeSecond * frequencyHertz) % 1;

  $.setPosition(
    $.state.origin.add(
      new Vector3(0, Math.sin($.state.phase * TAU) * amplitudeMeter, 0),
    ),
  );
},0.1));
