import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { HumanoidState } from './DefaultHumanoidModel'

interface VibatarProps {
  state: HumanoidState
  username: string
}

export function Vibatar({ state, username }: VibatarProps) {
  const { scene, animations } = useGLTF(`/${username}.gltf`)
  const { actions } = useAnimations(animations, scene)
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    // Stop all animations first
    Object.values(actions).forEach(action => {
      if (action) action.stop()
    })

    // Try to play the animation for the current state
    const action = actions[state]
    if (action) {
      action.play()
    }
  }, [actions, state])

  return (
    <primitive
      ref={groupRef}
      object={scene}
      scale={0.5}
      position={[0, -1.5, 0]}
      rotation={[0, -0.5, 0]}
    />
  )
}
