// ============================================================================
// 🚀 TEMPLATE ENTRY: src/App.tsx
// ----------------------------------------------------------------------------
// Structure:
// - <Scene3D /> renders the Three.js Canvas in the background (full-screen).
// - <OverlayUI /> renders DOM overlays on top with pointer-events passthrough.
//
// When starting your project, you can keep this split architecture or replace
// either component with your custom pages, routes, or layouts.
// ============================================================================

import { Scene3D } from "./components/Scene3D";
import { OverlayUI } from "./components/OverlayUI";


export function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      {/* 3D Canvas Background */}
      <Scene3D />

      {/* Floating 2D / HTML UI Overlay */}
      <OverlayUI />
    </div>
  );
}

export default App;

