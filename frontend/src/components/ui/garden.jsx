// src/components/ui/MoodGarden.jsx
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Tulip({ position }) {
  const ref = useRef()

  // Animate sway (like wind blowing)
  useFrame(({ clock }) => {
    ref.current.rotation.z = Math.sin(clock.elapsedTime + position[0]) * 0.1
  })

  return (
    <group ref={ref} position={position}>
      {/* Stem */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Tulip petals (cup shape) */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[0, 1.5, 0]}
          rotation={[0, (i * Math.PI) / 3, 0]}
        >
          {/* Each petal is a cut sphere */}
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI / 3]} />
          <meshStandardMaterial
            color="pink"
            emissive="pink"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* Inner glow light */}
      <pointLight color="gold" intensity={1.2} distance={2} position={[0, 1.5, 0]} />
    </group>
  )
}

function Garden() {
  const tulips = []
  for (let i = 0; i < 25; i++) {
    tulips.push([
      Math.random() * 10 - 5, // x
      0,                     // y
      Math.random() * 10 - 5, // z
    ])
  }

  return (
    <Canvas
      camera={{ position: [0, 5, 12], fov: 50 }}
      style={{ width: "100%", height: "100vh", background: "darkgreen" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Tulips */}
      {tulips.map((pos, i) => (
        <Tulip key={i} position={pos} />
      ))}

      <OrbitControls />
    </Canvas>
  )
}

export default Garden
