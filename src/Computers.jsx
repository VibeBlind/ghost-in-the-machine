import { useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/computers.glb', '10')
  const instances = useMemo(
    () => ({
      Monitor1: nodes.Monitor1001,
      Monitor2: nodes.Monitor2001,
      Monitor3: nodes.Monitor3001,
      Screen1: nodes.Screen1001,
      Screen2: nodes.Screen2001,
      Screen3: nodes.Screen3001,
      PC1: nodes.PC1001,
      PC2: nodes.PC2001,
      PC3: nodes.PC3001,
      Keyboard: nodes.Keyboard001
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances}>{children}</context.Provider>}
    </Merged>
  )
}

export function Computers(props) {
  const instances = useContext(context)
  const { nodes, materials } = useGLTF('/computers.glb', '10')

  return (
    <group {...props} dispose={null}>
      {/* Main Monitor */}
      <mesh
        geometry={nodes.Monitor4001.geometry}
        material={materials.Texture}
        position={[-0.19, 1.5, -3.31]}>
        {/*
        <Screen
          screen="Screen4001"
          video="/textures/spooky.mp4"
          image="/textures/placeholder.jpg"
        />
        */}
      </mesh>

      {/* Small Monitors */}
      <instances.Monitor1 position={[0.22, 0, -1.97]} rotation={[0, -0.23, 0]}>
        <instances.Screen1 />
      </instances.Monitor1>
      <instances.Monitor1 position={[-4.17, 4.62, -3.18]} rotation={[0, 0.78, 0]}>
        <instances.Screen1 />
      </instances.Monitor1>
      <instances.Monitor1 position={[-1.59, 0.6, -3.02]} rotation={[0, 0.13, 0]}>
        <instances.Screen1 />
      </instances.Monitor1>
      <instances.Monitor1 position={[1.88, 3.38, -2.54]} rotation={[0, -0.43, 0]}>
        <instances.Screen1 />
      </instances.Monitor1>
      <instances.Monitor1 position={[-3.49, 1.5, -1.92]} rotation={[0, 1.19, 0]}>
        <instances.Screen1 />
      </instances.Monitor1>
      <instances.Monitor1 position={[-2.32, 2.74, -2.81]} rotation={[0, 0.41, 0]}>
        <instances.Screen1 />
      </instances.Monitor1>

      {/* Medium Monitors */}
      <instances.Monitor2 position={[1.83, 0.38, -1.49]} rotation={[0, -0.39, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[3.39, 2.13, -0.7]} rotation={[0, -1.09, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[-2.46, 1.5, -2.76]} rotation={[0, 0.44, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[4.08, 2.9, 0.95]} rotation={[0, -1.39, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[-0.76, 4.22, -4.65]} rotation={[0, 0.09, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[0.02, 5.44, -4.7]} rotation={[0, 0.01, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[0.96, 4.22, -4.54]} rotation={[0, -0.22, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[-3.79, 2.11, 0.82]} rotation={[0, 1.46, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>
      <instances.Monitor2 position={[-5.43, 4.22, -0.66]} rotation={[0, 1.27, 0]}>
        <instances.Screen2 />
      </instances.Monitor2>

      {/* Large Monitors */}
      <instances.Monitor3 position={[-3.54, 2.42, -1.19]} rotation={[0, 1.22, 0]}>
        <instances.Screen3 />
      </instances.Monitor3>
      <instances.Monitor3 position={[3.43, 4.82, -3.61]} rotation={[0, -0.61, 0]}>
        <instances.Screen3 />
      </instances.Monitor3>
      <instances.Monitor3 position={[5.15, 4.2, -2.21]} rotation={[0, -0.9, 0]}>
        <instances.Screen3 />
      </instances.Monitor3>
      <instances.Monitor3 position={[2.24, 1.5, -2.34]} rotation={[0, -0.44, 0]}>
        <instances.Screen3 />
      </instances.Monitor3>
      <instances.Monitor3 position={[-3.66, 0.6, -0.43]} rotation={[0, 1.35, 0]}>
        <instances.Screen3 />
      </instances.Monitor3>
      <instances.Monitor3 position={[-2.82, 4.62, -4.16]} rotation={[0, 0.47, 0]}>
        <instances.Screen3 />
      </instances.Monitor3>

      <instances.PC1 position={[-5.8, 0, 0.34]} rotation={[Math.PI, -1.41, Math.PI]} />
      <instances.PC1 position={[-5.88, 2.1, -0.5]} rotation={[Math.PI, -1.49, Math.PI]} />
      <instances.PC1 position={[-5.96, 2.1, 0.27]} rotation={[0, 1.49, 0]} />
      <instances.PC1 position={[-5.58, 0, -1.21]} rotation={[Math.PI, -1.48, Math.PI]} />
      <instances.PC1 position={[-5.15, 1.8, -2.43]} rotation={[0, 1.26, Math.PI / 2]} />
      <instances.PC1 position={[-5.57, 2.1, -2.11]} rotation={[0, 1.29, 0]} />
      <instances.PC1 position={[-4.27, 3.89, -3.82]} rotation={[Math.PI, -0.89, Math.PI / 2]} />
      <instances.PC1 position={[-4.46, 2.1, -3.6]} rotation={[Math.PI, -0.75, Math.PI]} />
      <instances.PC1 position={[-4.19, 0, -3.43]} rotation={[0, 0.7, 0]} />
      <instances.PC1 position={[-4.76, 0, -2.88]} rotation={[0, 0.96, 0]} />
      <instances.PC1 position={[-3.06, 0, -4.46]} rotation={[0, 0.43, 0]} />
      <instances.PC1 position={[-3.74, 0, -4.01]} rotation={[Math.PI, -0.62, Math.PI]} />
      <instances.PC1 position={[-3.68, 2.1, -4.01]} rotation={[Math.PI, -0.65, Math.PI]} />
      <instances.PC1 position={[1.42, 2.1, -4.93]} rotation={[-Math.PI, 0.23, -Math.PI]} />
      <instances.PC1 position={[-4.05, 3.89, -3.9]} rotation={[0, 0.56, -Math.PI / 2]} />
      <instances.PC1 position={[0.79, 1.8, -4.8]} rotation={[Math.PI, 0.21, -Math.PI / 2]} />
      <instances.PC1 position={[1.64, 0, -4.75]} rotation={[-Math.PI, 0.43, -Math.PI]} />
      <instances.PC1 position={[0.71, 2.1, -5.13]} rotation={[0, -0.08, 0]} />
      <instances.PC1 position={[-2.29, 2.1, -5.02]} rotation={[Math.PI, -0.28, Math.PI]} />
      <instances.PC1 position={[-2.39, 0, -4.94]} rotation={[Math.PI, -0.3, Math.PI]} />
      <instances.PC1 position={[-0.65, 2.1, -4.99]} rotation={[-Math.PI, 0.07, -Math.PI]} />
      <instances.PC1 position={[-1.48, 2.1, -5.11]} rotation={[0, 0.06, 0]} />
      <instances.PC1 position={[-0.76, 0, -5.02]} rotation={[Math.PI, -0.05, Math.PI]} />
      <instances.PC1 position={[2.59, 3.89, -4.68]} rotation={[0, -0.55, -Math.PI / 2]} />
      <instances.PC1 position={[2.86, 2.1, -4.4]} rotation={[0, -0.49, 0]} />
      <instances.PC1 position={[3.14, 0, -4.35]} rotation={[-Math.PI, 0.46, -Math.PI]} />
      <instances.PC1 position={[3.73, 0, -3.86]} rotation={[0, -0.56, 0]} />
      <instances.PC1 position={[5.54, 2.1, -2.29]} rotation={[0, -1.16, 0]} />
      <instances.PC1 position={[4.74, 2.1, -2.97]} rotation={[0, -0.75, 0]} />
      <instances.PC1 position={[5.43, 3.89, -2.62]} rotation={[0, -1.02, -Math.PI / 2]} />
      <instances.PC1 position={[5.21, 1.8, -2.83]} rotation={[0, -0.78, Math.PI / 2]} />
      <instances.PC1 position={[4.49, 0, -3.51]} rotation={[-Math.PI, 0.74, -Math.PI]} />
      <instances.PC1 position={[6.22, 0, -0.8]} rotation={[0, -1.2, 0]} />
      <instances.PC1 position={[6.19, 0, 0.16]} rotation={[-Math.PI, 1.35, -Math.PI]} />
      <instances.PC1 position={[6.43, 2.1, 0.19]} rotation={[0, 1.44, 0]} />
      <instances.PC1 position={[6.25, 3.89, 0.55]} rotation={[-Math.PI, 1.51, Math.PI / 2]} />
      <instances.PC1 position={[4.02, 0.3, 1.8]} rotation={[0, 1.33, -Math.PI / 2]} />
      <instances.PC1 position={[4.59, 1.56, 0.41]} rotation={[0, 1.21, Math.PI / 2]} />
      <instances.PC1 position={[4.24, 2.19, 0.24]} rotation={[0, -1.44, -Math.PI / 2]} />
      <instances.PC1 position={[6.67, 0, 1.08]} rotation={[Math.PI, -1.43, Math.PI]} />
      <instances.PC1 position={[6.49, 2.1, 1.81]} rotation={[Math.PI, -1.51, Math.PI]} />
      <instances.PC1 position={[-5.91, 0, 1.26]} rotation={[-Math.PI, 1.55, -Math.PI]} />
      <instances.PC1 position={[-5.91, 1.8, 2.29]} rotation={[-3.14, -1.55, -Math.PI / 2]} />
      <instances.PC1 position={[-6.12, 2.1, 1.83]} rotation={[0, -1.56, 0]} />
      <instances.PC1 position={[-4.09, 1.81, 0.61]} rotation={[Math.PI, -1.39, Math.PI / 2]} />
      <instances.PC1 position={[1.52, 0, -2.74]} rotation={[0, -0.78, 0]} />
      <instances.PC1 position={[-2.38, 0.3, -2.74]} rotation={[0, 0.31, -Math.PI / 2]} />
      <instances.PC1 position={[2.98, 0, -2.35]} rotation={[Math.PI, -0.34, Math.PI]} />
      <instances.PC1 position={[-2.79, 0, -2.69]} rotation={[0, 0.39, 0]} />
      <instances.PC1 position={[4.08, 0, -0.41]} rotation={[-Math.PI, 1.1, -Math.PI]} />
      <instances.PC1 position={[3.48, 0, -1.16]} rotation={[0, -1.17, 0]} />
      <instances.PC1 position={[-4.01, 0, 0.94]} rotation={[Math.PI, -1.41, Math.PI]} />
      <instances.PC1 position={[-4.03, 0, 1.63]} rotation={[0, 1.35, 0]} />

      <instances.PC2 position={[-5.75, 0, -0.41]} rotation={[0, 1.49, 0]} />
      <instances.PC2 position={[-5.9, 1.8, -0.85]} rotation={[Math.PI, -1.45, Math.PI / 2]} />
      <instances.PC2 position={[-5.94, 3.91, 0.65]} rotation={[-Math.PI, -1.54, -Math.PI / 2]} />
      <instances.PC2 position={[-5.45, 0, -2.14]} rotation={[Math.PI, -1.17, Math.PI]} />
      <instances.PC2 position={[-5.43, 3.91, -2.41]} rotation={[0, 1.34, Math.PI / 2]} />
      <instances.PC2 position={[-5.74, 2.1, -1.3]} rotation={[Math.PI, -1.34, Math.PI]} />
      <instances.PC2 position={[-4.85, 2.1, -2.89]} rotation={[0, 0.95, 0]} />
      <instances.PC2 position={[-5.18, 1.8, -2.79]} rotation={[0, 0.85, -Math.PI / 2]} />
      <instances.PC2 position={[-2.72, 1.8, -4.85]} rotation={[Math.PI, -0.53, Math.PI / 2]} />
      <instances.PC2 position={[-3.12, 2.1, -4.62]} rotation={[0, 0.54, 0]} />
      <instances.PC2 position={[2.19, 2.1, -4.73]} rotation={[0, -0.38, 0]} />
      <instances.PC2 position={[0.81, 3.91, -4.94]} rotation={[Math.PI, 0.2, -Math.PI / 2]} />
      <instances.PC2 position={[2.38, 0, -4.58]} rotation={[-Math.PI, 0.31, -Math.PI]} />
      <instances.PC2 position={[-2.48, 3.91, -4.73]} rotation={[-Math.PI, -0.19, -Math.PI / 2]} />
      <instances.PC2 position={[-0.88, 1.8, -4.88]} rotation={[Math.PI, -0.14, Math.PI / 2]} />
      <instances.PC2 position={[-1.58, 0, -4.8]} rotation={[0, 0.16, 0]} />
      <instances.PC2 position={[0.69, 3.91, -5.01]} rotation={[0, -0.02, Math.PI / 2]} />
      <instances.PC2 position={[-0.75, 1.8, -5.25]} rotation={[0, -0.11, -Math.PI / 2]} />
      <instances.PC2 position={[-0.02, 0, -5.33]} rotation={[0, 0.06, 0]} />
      <instances.PC2 position={[3.54, 2.1, -3.97]} rotation={[-Math.PI, 0.61, -Math.PI]} />
      <instances.PC2 position={[3.78, 1.8, -3.91]} rotation={[Math.PI, 0.35, Math.PI / 2]} />
      <instances.PC2 position={[5.63, 1.8, -0.98]} rotation={[-Math.PI, 1.2, Math.PI / 2]} />
      <instances.PC2 position={[5.7, 2.1, -1.47]} rotation={[-Math.PI, 1.23, -Math.PI]} />
      <instances.PC2 position={[4.47, 2.1, -3.71]} rotation={[-Math.PI, 0.7, -Math.PI]} />
      <instances.PC2 position={[5.16, 3.91, -2.86]} rotation={[0, -0.7, Math.PI / 2]} />
      <instances.PC2 position={[4.81, 0, -2.8]} rotation={[-Math.PI, 0.87, -Math.PI]} />
      <instances.PC2 position={[5.23, 0, -2.2]} rotation={[0, -0.88, 0]} />
      <instances.PC2 position={[5.87, 0, -1.68]} rotation={[0, -1.11, 0]} />
      <instances.PC2 position={[6.27, 1.8, -1.02]} rotation={[0, -1.43, -Math.PI / 2]} />
      <instances.PC2 position={[6.1, 2.1, -0.7]} rotation={[0, -1.43, 0]} />
      <instances.PC2 position={[0.8, 0, -5.1]} rotation={[0, -0.14, 0]} />
      <instances.PC2 position={[0.05, 2.1, -5.11]} rotation={[-Math.PI, 0.08, -Math.PI]} />
      <instances.PC2 position={[4.42, 0.93, 0.42]} rotation={[Math.PI, -1.51, Math.PI / 2]} />
      <instances.PC2 position={[6.5, 2.1, 0.93]} rotation={[0, 1.5, 0]} />
      <instances.PC2 position={[6.46, 0, 1.9]} rotation={[Math.PI, -1.45, Math.PI]} />
      <instances.PC2 position={[6.57, 1.8, 0.66]} rotation={[Math.PI, -1.47, Math.PI / 2]} />
      <instances.PC2 position={[6.35, 3.91, 2.13]} rotation={[-3.14, -1.56, -1.57]} />
      <instances.PC2 position={[-6.21, 0, 1.98]} rotation={[0, 1.46, 0]} />
      <instances.PC2 position={[-5.85, 3.91, 2.23]} rotation={[0, -1.51, Math.PI / 2]} />
      <instances.PC2 position={[-5.78, 2.1, 1.1]} rotation={[-Math.PI, 1.51, -Math.PI]} />
      <instances.PC2 position={[-0.3, 0, -3.43]} rotation={[Math.PI, -0.17, Math.PI]} />
      <instances.PC2 position={[0.53, 0, -3.53]} rotation={[0, -0.06, 0]} />
      <instances.PC2 position={[-3.85, 0.3, -1.3]} rotation={[Math.PI, -1.28, Math.PI / 2]} />
      <instances.PC2 position={[-3.43, 0, -1.98]} rotation={[0, 0.84, 0]} />
      <instances.PC2 position={[3.26, 1.8, -1.55]} rotation={[0, -0.93, -Math.PI / 2]} />
      <instances.PC2 position={[3.06, 4.52, -4.38]} rotation={[Math.PI, 0.54, -Math.PI / 2]} />
      <instances.PC2 position={[-4.36, 0, 2.31]} rotation={[Math.PI, -1.43, Math.PI]} />

      <instances.PC3 position={[2.04, 0, -1.54]} rotation={[0, -0.56, 0]} />
      <instances.PC3 position={[2.11, 3.01, -2.79]} rotation={[0, -0.45, 0]} />
      <instances.PC3 position={[-4.21, 4.26, -3.43]} rotation={[0, 0.72, 0]} />
      <instances.PC3 position={[-2.61, 4.26, -4.49]} rotation={[0, 0.36, 0]} />
      <instances.PC3 position={[4.18, 2.5, 0.91]} rotation={[Math.PI, -1.56, Math.PI]} />
      <instances.PC3 position={[-3.67, 2.13, -0.68]} rotation={[0, 1.26, 0]} scale={[1, 0.8, 1]} />

      <instances.Keyboard position={[-0.64, 0.81, -2.83]} rotation={[0.02, 0.54, 1.47]} />
      <instances.Keyboard position={[-3.68, 3.24, -0.14]} rotation={[-2.86, 1.43, -1.96]} />
      <instances.Keyboard position={[-2.51, 0.25, -1.57]} rotation={[1.34, 0.17, -0.63]} />
      <instances.Keyboard position={[3.55, 0.27, -0.76]} rotation={[1.33, 0.1, -0.4]} />
      <instances.Keyboard position={[3.48, 3.35, -0.78]} rotation={[0, -1.01, 0]} />
    </group>
  )
}

useGLTF.preload('/computers.glb')
