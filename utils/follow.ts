/**
 * Follow the target player with a specified offset.
 *
 * @param targetPlayer - The player handle to follow.
 * @param offset - The offset from the player's position to maintain.
 * @throws Will throw an error if the player's position or rotation cannot be obtained.
 */
export const follow = (targetPlayer: PlayerHandle, offset: Vector3): void => {
  const playerPosition = targetPlayer.getPosition();
  const playerRotation = targetPlayer.getRotation();
  if (playerPosition && playerRotation) {
    $.setPosition(playerPosition.add(offset));
    $.setRotation(playerRotation);
  } else {
    throw new Error('Player position or rotation cannot be obtained.');
  }
};
