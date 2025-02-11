// utils/follow.ts
var follow = (targetPlayer, offset) => {
  const playerPosition = targetPlayer.getPosition();
  const playerRotation = targetPlayer.getRotation();
  if (playerPosition && playerRotation) {
    $.setPosition(playerPosition.add(offset));
    $.setRotation(playerRotation);
  } else {
    throw new Error("Player position or rotation cannot be obtained.");
  }
};

// scripts/FollowSample.ts
var offset = new Vector3(0, 2, 0);
$.onInteract((player) => {
  if ($.state.owner?.id === player.id) {
    $.state.owner = undefined;
    return;
  }
  $.state.owner = player;
});
$.onUpdate(() => {
  if ($.state.owner !== undefined)
    follow($.state.owner, offset);
});
