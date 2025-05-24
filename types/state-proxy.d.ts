interface StateProxy {
  /** Origin position of the object. */
  origin: Vector3;
  /** Current phase of the motion. Ranges from 0 to 1. */
  phase: number;
  /** Initialized flag to check if the state is initialized. */
  initialized: boolean;
}
