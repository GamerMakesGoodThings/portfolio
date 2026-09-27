"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "./Particles";
import FloatingGeometry from "./FloatingGeometry";

export default function Scene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
          <Particles count={400} />
          <FloatingGeometry />
        </Suspense>
      </Canvas>
    </div>
  );
}
