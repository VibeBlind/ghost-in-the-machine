import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'

import { Instances, Computers } from './Computers'
import { Ground } from './Ground'
import { SpinningBox } from './SpinningBox'
//import { Eye } from './Eye'

export default function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 4], fov: 45, near: 1, far: 30 }}
        eventSource={document.getElementById('root')}
        eventPrefix="client">
        <fog attach="fog" args={['black', 0, 30]} />
        <color attach="background" args={['black']} />

        {/* Lights */}
        <hemisphereLight intensity={.5} groundColor="black" />
        <spotLight
          position={[0, 30, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.2}
          castShadow
          shadow-mapSize={1024}
        />

        {/* Lights */}
        {/*
        <AccumulativeShadows frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
          <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
        </AccumulativeShadows>
        <BakeShadows />
        */}

        {/* Scene */
        //<SpinningBox position={[0, 2, 0]} scale={0.5} />
        }
        <group position={[-0, -2, 0]}> 
          <Instances>
            <Computers/>
          </Instances>
          
          <Ground />
        </group>

        {/* Postprocessing */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={2} />
          <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
        </EffectComposer>
        
        {
          //<OrbitControls />
          <CameraRig />
        }
        <BakeShadows />
      </Canvas>
    </Suspense>
  )
}

function CameraRig() {
  useFrame((state, delta) => {
    let pos = state.camera.position
    let x = -(state.pointer.x * state.viewport.width) / 3
    let y = -state.pointer.y / 2
    easing.damp3(pos, [x, y, 5], 0.5, delta)
    state.camera.lookAt(0, 0, 0)
  })
}