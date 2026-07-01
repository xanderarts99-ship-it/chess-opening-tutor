type StorageLike = Pick<Storage, "getItem" | "setItem">;

export type MoveSoundKind = "move" | "success" | "warning";

export type MoveSoundCue = {
  durationMs: number;
  frequencyHz: number;
  gain: number;
  oscillatorType: OscillatorType;
};

const moveSoundStorageKey = "chess-opening-tutor.move-sound.v1";

const moveSoundCues: Record<MoveSoundKind, MoveSoundCue> = {
  move: {
    durationMs: 72,
    frequencyHz: 520,
    gain: 0.045,
    oscillatorType: "sine",
  },
  success: {
    durationMs: 96,
    frequencyHz: 660,
    gain: 0.05,
    oscillatorType: "triangle",
  },
  warning: {
    durationMs: 110,
    frequencyHz: 180,
    gain: 0.04,
    oscillatorType: "sawtooth",
  },
};

export function getMoveSoundCue(kind: MoveSoundKind): MoveSoundCue {
  return moveSoundCues[kind];
}

export function loadMoveSoundEnabled(
  storage: StorageLike | null = getBrowserStorage(),
): boolean {
  if (!storage) {
    return true;
  }

  const storedValue = storage.getItem(moveSoundStorageKey);

  if (storedValue === "false") {
    return false;
  }

  return true;
}

export function saveMoveSoundEnabled(
  enabled: boolean,
  storage: StorageLike | null = getBrowserStorage(),
) {
  storage?.setItem(moveSoundStorageKey, String(enabled));
}

function getBrowserStorage(): StorageLike | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}
