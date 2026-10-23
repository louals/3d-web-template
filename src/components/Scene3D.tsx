// ============================================================================
// 🎨 TEMPLATE FILE: src/components/Scene3D.tsx
// ----------------------------------------------------------------------------
// WHAT TO DO WITH THIS FILE:
// 1. [VERIFICATION]: When running `npm run dev`, you should see an animated,
//    floating purple Torus Knot with sparkles and orbit controls. If you see it
//    and can drag it around, your 3D WebGL / R3F stack is 100% working.
// 2. [CUSTOMIZATION / DELETE]:
//    - Replace `InteractiveOrb` with your own 3D models (GLTF/GLB via useGLTF),
//      custom meshes, particle systems, or environment lights.
//    - Customize camera position, lighting, and post-processing.
// ============================================================================

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { OrbitControls, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useAppStore } from "../store/useAppStore";

// ----------------------------------------------------------------------------
// 👉 DEMO 3D MESH (Replace or delete this component for your own project)
// ----------------------------------------------------------------------------
function InteractiveOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { wireframe, rotationSpeed, primaryColor } = useAppStore();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3 * rotationSpeed;
      meshRef.current.rotation.y += delta * 0.4 * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.32, 160, 32]} />
        <MeshDistortMaterial
          color={primaryColor}
          wireframe={wireframe}
          distort={0.35}
          speed={2 * rotationSpeed}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// ----------------------------------------------------------------------------
// 🌟 3D CANVAS WRAPPER (Keep this Canvas structure, customize lights/camera/objects)
// ----------------------------------------------------------------------------
export function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        <pointLight position={[0, 5, 0]} intensity={1.5} color="#ec4899" />

        <Sparkles count={80} scale={12} size={2.5} speed={0.4} color="#a855f7" />
        
        {/* 👉 Replace <InteractiveOrb /> with your own 3D scene elements */}
        <InteractiveOrb />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxDistance={10}
          minDistance={3}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

