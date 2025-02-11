import { follow } from '../utils/follow';

declare module '../types/cluster-script.d.ts' {
  interface StateProxy {
    /** Player to follow. */
    owner?: PlayerHandle | undefined;
  }
}

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
