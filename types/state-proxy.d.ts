interface StateProxy {
  /** Global message bus. */
  messageBus?: ItemHandle;
  /** Channel ID to publish message. */
  channelId: number;
  /** Player to follow. */
  owner?: PlayerHandle | undefined;
  /** Subscriptions to channels. */
  subscriptions: Partial<Record<number, (ItemHandle | PlayerHandle)[]>>;
  /** Global message bus. */
  messageBus?: ItemHandle;
  /** Channel ID to publish message. */
  channelId: number;
  /** Channel ID to subscribe message. */
  channelId: number;
  /** Visible or not */
  isVisible: boolean;
  /** Origin position of the object. */
  origin: Vector3;
  /** Current phase of the motion. Ranges from 0 to 1. */
  phase: number;
}
