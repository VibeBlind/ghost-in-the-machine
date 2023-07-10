import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
//import { LinearEncoding } from 'three'

export function Ground() {
  /*
  const [roughness, normal] = useTexture([
    '/textures/terrain-roughness.jpg',
    '/textures/terrain-normal.jpg'
  ])

  roughness.encoding = LinearEncoding
  normal.encoding = LinearEncoding
  */
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial
        resolution={1024}
        color="#202020"
        mirror={0.5}
        metalness={0.75}
        roughness={0.8}
        //roughnessMap={roughness}
        //normalMap={normal}
        normalScale={[0.2, 0.2]}
        dithering={true}
        blur={[500, 50]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={5} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        depthScale={1.1} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.4}
        maxDepthThreshold={1.25}
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        reflectorOffset={0.01} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        debug={0}
      />
    </mesh>
  )
}
