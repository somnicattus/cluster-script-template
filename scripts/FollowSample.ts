import { follow } from '../utils/follow';

const offset = new Vector3(0, 2, 0);

$.onInteract((player) => {
  if ($.state.owner?.id === player.id) {
    $.state.owner = undefined;
    return;
  }
  $.state.owner = player;
});

$.onUpdate(() => {
  if ($.state.owner !== undefined) follow($.state.owner, offset);
});
