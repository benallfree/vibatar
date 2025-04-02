import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import { Suspense, Component, ReactNode, useEffect } from 'react'

// Using benallfree's model as the demo
const MODEL_URL = '/benallfree.gltf'

class ErrorBoundary extends Component<{
  children: ReactNode
  fallback: ReactNode
}> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

function FallbackError() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-red-400">
      Failed to load 3D model. Please try again later.
    </div>
  )
}

function Model() {
  const { scene, animations } = useGLTF(MODEL_URL)
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    // Try to play the walking animation if it exists
    const walkAction = actions['Walking'] || actions['walk'] || actions['Walk']
    if (walkAction) {
      walkAction.play()
    }
  }, [actions])

  return (
    <primitive
      object={scene}
      scale={0.5}
      position={[0, -1.5, 0]}
      rotation={[0, -0.5, 0]}
    />
  )
}

export function ModelViewer() {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm">
      <ErrorBoundary fallback={<FallbackError />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
