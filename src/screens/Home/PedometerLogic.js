import { Accelerometer } from "expo-sensors";
import { create } from "zustand";

export const usePedometerStore = create((set) => ({
  steps: 0,
  addStep: () => set((s) => ({ steps: s.steps + 1 })),
}));

let baseline = 0;
let isBaselined = false;
let baselineStart = 0;
let baselineSamples = [];
let lastPeakTime = 0;

export function startPedometer() {
  Accelerometer.setUpdateInterval(50);

  baselineStart = Date.now();

  Accelerometer.addListener(({ x, y, z }) => {
    const mag = Math.sqrt(x * x + y * y + z * z);

    if (!isBaselined) {
      baselineSamples.push(mag);
      if (Date.now() - baselineStart > 2000) {
        baseline =
          baselineSamples.reduce((a, b) => a + b, 0) / baselineSamples.length;
        isBaselined = true;
      }
      return;
    }

    if (mag > baseline + 1.0) {
      const now = Date.now();
      if (now - lastPeakTime > 320) {
        lastPeakTime = now;
        usePedometerStore.getState().addStep();
      }
    }
  });
}