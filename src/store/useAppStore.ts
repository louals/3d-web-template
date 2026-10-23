// ============================================================================
// 📦 GLOBAL STATE STORE: src/store/useAppStore.ts (Zustand v5)
// ----------------------------------------------------------------------------
// This store manages state shared between the 3D canvas and the HTML overlay.
// When building your project:
// - Delete demo state (wireframe, rotationSpeed, primaryColor).
// - Define your own app state (e.g., activeScene, cameraTarget, theme, userSelections).
// ============================================================================

import { create } from "zustand";

interface AppState {
  // Demo states (delete/replace for your own project):
  wireframe: boolean;
  rotationSpeed: number;
  primaryColor: string;
  isAudioMuted: boolean;
  setWireframe: (val: boolean) => void;
  setRotationSpeed: (speed: number) => void;
  setPrimaryColor: (color: string) => void;
  toggleAudioMute: () => void;
}


export const useAppStore = create<AppState>((set) => ({
  wireframe: false,
  rotationSpeed: 1,
  primaryColor: "#a855f7",
  isAudioMuted: true,
  setWireframe: (wireframe) => set({ wireframe }),
  setRotationSpeed: (rotationSpeed) => set({ rotationSpeed }),
  setPrimaryColor: (primaryColor) => set({ primaryColor }),
  toggleAudioMute: () => set((state) => ({ isAudioMuted: !state.isAudioMuted })),
}));
