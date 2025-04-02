import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export enum HumanoidState {
  WALKING = 'Walk',
  IDLE = 'Idle',
  RUNNING = 'Run',
}

interface DefaultHumanoidModelProps {
  state: HumanoidState
}

export function DefaultHumanoidModel({ state }: DefaultHumanoidModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    timeRef.current += delta

    const head = groupRef.current.children[0]
    const torso = groupRef.current.children[1]
    const leftArm = groupRef.current.children[2]
    const rightArm = groupRef.current.children[3]
    const leftLeg = groupRef.current.children[4]
    const rightLeg = groupRef.current.children[5]

    if (state === HumanoidState.WALKING) {
      // Walking animation
      const bobHeight = Math.sin(timeRef.current * 4) * 0.1
      torso.position.y = 1 + bobHeight
      head.position.y = 2 + bobHeight

      // Head nodding slightly
      head.rotation.x = Math.sin(timeRef.current * 4) * 0.1

      // Arms swinging with slight shoulder movement
      leftArm.rotation.z = Math.sin(timeRef.current * 4) * 0.5
      rightArm.rotation.z = -Math.sin(timeRef.current * 4) * 0.5
      leftArm.rotation.x = Math.sin(timeRef.current * 4) * 0.2
      rightArm.rotation.x = -Math.sin(timeRef.current * 4) * 0.2

      // Legs swinging with hip movement
      leftLeg.rotation.z = -Math.sin(timeRef.current * 4) * 0.5
      rightLeg.rotation.z = Math.sin(timeRef.current * 4) * 0.5
      leftLeg.rotation.x = Math.sin(timeRef.current * 4) * 0.2
      rightLeg.rotation.x = -Math.sin(timeRef.current * 4) * 0.2
    } else if (state === HumanoidState.IDLE) {
      // Idle animation - gentle breathing and slight head movement
      const breathingHeight = Math.sin(timeRef.current * 2) * 0.05
      torso.position.y = 1 + breathingHeight
      head.position.y = 2 + breathingHeight

      // Gentle head movement
      head.rotation.x = Math.sin(timeRef.current * 2) * 0.05
      head.rotation.y = Math.sin(timeRef.current * 1.5) * 0.05

      // Slight arm movement
      leftArm.rotation.z = Math.sin(timeRef.current * 2) * 0.1
      rightArm.rotation.z = -Math.sin(timeRef.current * 2) * 0.1

      // Slight leg movement
      leftLeg.rotation.z = -Math.sin(timeRef.current * 2) * 0.1
      rightLeg.rotation.z = Math.sin(timeRef.current * 2) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 1, 0]}>
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>

      {/* Torso */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.4]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.4, 0.4, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.4, 0.4, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.15, -0.8, 0]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.15, -0.8, 0]}>
        <boxGeometry args={[0.15, 0.7, 0.15]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>
    </group>
  )
}
