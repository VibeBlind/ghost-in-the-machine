import { Html } from '@react-three/drei'

export function ToolTip() {
  return (
    <Html center position={[0,0,0]}>
      <p>Click and drag on the white part to move the camera</p>
    </Html>
  );
}