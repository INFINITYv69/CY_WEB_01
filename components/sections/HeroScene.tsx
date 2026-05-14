"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas dpr={[1, 1.25]} frameloop="always" performance={{ min: 0.7 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} color="#0284c7" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#4f46e5" intensity={1.5} />
        
        <Suspense fallback={null}>
          <group position={[3, 0, 0]}>
            <Globe />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.002;
    // Mouse tilt
    meshRef.current.rotation.x = state.mouse.y * 0.2;
    meshRef.current.rotation.z = -state.mouse.x * 0.2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial 
        color="#0284c7" 
        wireframe 
        transparent 
        opacity={0.6} 
        emissive="#0284c7" 
        emissiveIntensity={0.2} 
      />
      {/* Internal Core */}
      <mesh scale={0.98}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial 
          color="#f1f5f9" 
          transparent 
          opacity={0.8} 
        />
      </mesh>
    </mesh>
  );
}
