"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingMesh({
  position,
  geometry,
  color,
  speed,
  rotationAxis,
}: {
  position: [number, number, number];
  geometry: "box" | "icosahedron" | "torus" | "octahedron";
  color: string;
  speed: number;
  rotationAxis: "x" | "y" | "z";
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * speed;
    mesh.current.rotation[rotationAxis] = t;
    mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
    mesh.current.position.x = position[0] + Math.cos(t * 0.3) * 0.1;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[0.5, 0.5, 0.5]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.4, 0]} />;
      case "torus":
        return <torusGeometry args={[0.3, 0.1, 8, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.35, 0]} />;
    }
  };

  return (
    <mesh ref={mesh} position={position}>
      {renderGeometry()}
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <FloatingMesh
        position={[-3, 2, -2]}
        geometry="box"
        color="#8b5cf6"
        speed={0.3}
        rotationAxis="y"
      />
      <FloatingMesh
        position={[3.5, -1, -3]}
        geometry="icosahedron"
        color="#06b6d4"
        speed={0.2}
        rotationAxis="x"
      />
      <FloatingMesh
        position={[-2, -2.5, -1]}
        geometry="torus"
        color="#6366f1"
        speed={0.4}
        rotationAxis="z"
      />
      <FloatingMesh
        position={[2, 3, -4]}
        geometry="octahedron"
        color="#a78bfa"
        speed={0.25}
        rotationAxis="y"
      />
      <FloatingMesh
        position={[4, 1, -2]}
        geometry="box"
        color="#22d3ee"
        speed={0.15}
        rotationAxis="x"
      />
      <FloatingMesh
        position={[-4, 0, -3]}
        geometry="icosahedron"
        color="#8b5cf6"
        speed={0.35}
        rotationAxis="z"
      />
    </group>
  );
}
