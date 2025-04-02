import { Grid, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HumanoidState } from './DefaultHumanoidModel';
import { Player } from './Player';

export function DemoScene() {
  const [humanoidState, setHumanoidState] = useState<HumanoidState>(HumanoidState.IDLE);
  const [isVibatar, setIsVibatar] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsVibatar(params.has('vibatar'));
  }, []);

  const toggleVibatar = () => {
    const newIsVibatar = !isVibatar;
    setIsVibatar(newIsVibatar);

    // Update URL without reloading the page
    const url = new URL(window.location.href);
    if (newIsVibatar) {
      url.searchParams.set('vibatar', 'benallfree');
    } else {
      url.searchParams.delete('vibatar');
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6 p-6">
      {/* Introduction Message */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Vibatar Demo Scene</h1>
        <p className="text-gray-700 mb-4">
          This demo showcases how to integrate Vibatar models into your 3D scene using URL parameters. Simply add{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">?vibatar=username</code> to load a specific user's Vibatar
          model.
        </p>
        <div className="space-y-2">
          <p className="text-gray-600">
            • Try it now:{' '}
            <a href="?vibatar=benallfree" className="text-blue-500 hover:underline">
              ?vibatar=benallfree
            </a>
          </p>
          <p className="text-gray-600">• Use the buttons below to switch between Idle and Walking states</p>
          <p className="text-gray-600">• Toggle between the default model and Vibatar model</p>
          <p className="text-gray-600">• Use your mouse to orbit around the scene (left click + drag)</p>
          <p className="text-gray-600">• Zoom in/out using the mouse wheel</p>
        </div>
      </div>

      {/* State Toggle */}
      <div className="flex gap-3">
        <button
          onClick={() => setHumanoidState(HumanoidState.IDLE)}
          className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
            humanoidState === HumanoidState.IDLE ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Idle
        </button>
        <button
          onClick={() => setHumanoidState(HumanoidState.WALKING)}
          className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
            humanoidState === HumanoidState.WALKING ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Walking
        </button>
        <button
          onClick={toggleVibatar}
          className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
            isVibatar ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {isVibatar ? 'Default Model' : 'Vibatar Model'}
        </button>
      </div>

      <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg">
        <Canvas camera={{ position: [5, 5, 5], fov: 75 }} className="w-full h-full">
          <color attach="background" args={['#000']} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />

          {/* Grid */}
          <Grid
            args={[20, 20]}
            position={[0, 0, 0]}
            cellColor="#6e6e6e"
            sectionColor="#9d9d9d"
            fadeDistance={30}
            fadeStrength={1}
            followCamera={false}
            infiniteGrid
          />

          {/* Walking Humanoid */}
          <Player state={humanoidState} />

          {/* Controls */}
          <OrbitControls />
        </Canvas>
      </div>

      {/* Code Sample */}
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-white font-semibold">Implementation Example</h2>
        </div>
        <SyntaxHighlighter
          language="typescript"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
        >
          {`import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Create default mesh for fallback
const defaultMesh = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0x808080 })
);

// Check if vibatar parameter exists in URL
const params = new URLSearchParams(window.location.search);
const username = params.get('vibatar');

// If vibatar parameter exists, try to load remote model
if (username) {
  const loader = new GLTFLoader();
  loader.load(
    \`https://vibatar.io/\${username}.gltf\`,
    (gltf) => {
      scene.add(gltf.scene);
    },
    undefined,
    (error) => {
      console.error('Failed to load Vibatar model:', error);
      scene.add(defaultMesh);
    }
  );
} else {
  scene.add(defaultMesh);
}`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

/* Minimal Example of URL-based Model Switching:
import * as THREE from 'three';

function DemoScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Check URL parameter
  const params = new URLSearchParams(window.location.search);
  const isVibatar = params.has('vibatar');

  // Create model based on URL parameter
  const model = isVibatar 
    ? new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshStandardMaterial({ color: 0xff0000 }))
    : new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial({ color: 0x00ff00 }));

  scene.add(model);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
*/
