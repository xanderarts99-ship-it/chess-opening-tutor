import { describe, expect, it } from "vitest";
import {
  getMoveSoundCue,
  loadMoveSoundEnabled,
  saveMoveSoundEnabled,
} from "./move-sound";

class MemoryStorage {
  private values = new Map<string, string>();

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}

describe("move sound", () => {
  it("provides distinct cues for move feedback", () => {
    expect(getMoveSoundCue("move").frequencyHz).toBeGreaterThan(
      getMoveSoundCue("warning").frequencyHz,
    );
    expect(getMoveSoundCue("success").durationMs).toBeGreaterThan(
      getMoveSoundCue("move").durationMs,
    );
  });

  it("defaults sound on and persists opt-out locally", () => {
    const storage = new MemoryStorage();

    expect(loadMoveSoundEnabled(storage)).toBe(true);

    saveMoveSoundEnabled(false, storage);
    expect(loadMoveSoundEnabled(storage)).toBe(false);

    saveMoveSoundEnabled(true, storage);
    expect(loadMoveSoundEnabled(storage)).toBe(true);
  });
});
