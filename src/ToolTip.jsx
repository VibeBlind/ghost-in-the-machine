import { Html } from '@react-three/drei'

export function ToolTip(pos) {
  return (
    <Html center position={[pos]}>
      <p>Click and drag on the white part to move the camera</p>
    </Html>
  );
}