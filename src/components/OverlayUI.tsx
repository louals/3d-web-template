// ============================================================================
// 🎛️ TEMPLATE FILE: src/components/OverlayUI.tsx
// ----------------------------------------------------------------------------
// WHAT TO DO WITH THIS FILE:
// 1. [VERIFICATION]: This file renders the floating HTML/Tailwind HUD on top
//    of the 3D scene (header, title, wireframe switch, speed, color picker, sound).
//    Clicking these proves that Framer Motion, Tailwind v4, Zustand, and audio work.
// 2. [CUSTOMIZATION / DELETE]:
//    - This is a demonstration overlay. Delete or replace this entire component
//      with your own app's layout, navbar, landing page sections, or dashboard.
// ============================================================================

import { motion } from "framer-motion";
import { Box, Volume2, VolumeX, Gauge, Palette, ArrowUpRight } from "lucide-react";
import { useAppStore } from "../store/useAppStore";

import { sfx } from "../utils/audio";


export function OverlayUI() {

  const {
    wireframe,
    setWireframe,
    rotationSpeed,
    setRotationSpeed,
    primaryColor,
    setPrimaryColor,
    isAudioMuted,
    toggleAudioMute,
  } = useAppStore();

  const colors = ["#a855f7", "#3b82f6", "#10b981", "#f43f5e", "#f59e0b", "#ec4899"];

  const handleSound = () => {
    toggleAudioMute();
    if (isAudioMuted) {
      sfx.playBeep(520, "sine", 0.15);
    }
  };

  const handleColorChange = (c: string) => {
    setPrimaryColor(c);
    if (!isAudioMuted) sfx.playBeep(440, "triangle", 0.08);
  };

  const handleWireframeToggle = () => {
    setWireframe(!wireframe);
    if (!isAudioMuted) sfx.playBeep(660, "sine", 0.1);
  };

  return (
    <div className="relative z-10 w-full min-h-screen pointer-events-none flex flex-col justify-between p-6 sm:p-10">
      {/* Top Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">Creative 3D Studio</h1>
            <p className="text-xs text-neutral-400">Three.js · R3F · Framer Motion · Tailwind v4</p>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-3">
          <button
            type="button"
            onClick={handleSound}
            aria-label={isAudioMuted ? "Unmute audio" : "Mute audio"}
            className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-neutral-300 hover:text-white transition-all shadow-sm"
          >
            {isAudioMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-purple-400" />}
          </button>
        </div>
      </motion.header>

      {/* Center Hero Floating Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-xl my-auto space-y-4 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-purple-300 border border-purple-500/20">
          <span className="rounded-full" />
          3D Frontend development template.
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Next-gen interactive <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            web experience.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md">
          Optimize and automate your creative workflows with this high-performance 3D WebGL / R3F starter.
          <br />
          Includes framer motion, tailwind, r3f, three.js, and more.
        </p>
      </motion.div>

      {/* Bottom Floating Control Dock */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-auto flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-panel max-w-4xl mx-auto w-full shadow-2xl"
      >
        {/* Wireframe Toggle */}
        <button
          type="button"
          onClick={handleWireframeToggle}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            wireframe
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
              : "bg-white/5 hover:bg-white/10 text-neutral-300"
          }`}
        >
          <Box className="w-4 h-4" />
          {wireframe ? "Wireframe ON" : "Solid Mesh"}
        </button>

        {/* Speed Controls */}
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl text-xs text-neutral-300">
          <Gauge className="w-4 h-4 text-neutral-400" />
          <span>Speed:</span>
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setRotationSpeed(s);
                if (!isAudioMuted) sfx.playBeep(500 * s, "sine", 0.05);
              }}
              className={`px-2 py-0.5 rounded-md font-bold transition-colors ${
                rotationSpeed === s ? "bg-purple-500 text-white" : "hover:text-white"
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Color Palette */}
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl">
          <Palette className="w-4 h-4 text-neutral-400 mr-1" />
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => handleColorChange(c)}
              aria-label={`Select color ${c}`}
              className={`w-5 h-5 rounded-full transition-transform ${
                primaryColor === c ? "scale-125 ring-2 ring-white" : "hover:scale-110 opacity-70"
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Action Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-all ml-auto"
        >
          <span>Use Template</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </motion.footer>
    </div>
  );
}
