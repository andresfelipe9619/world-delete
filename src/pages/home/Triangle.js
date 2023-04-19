import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Triangle = ({ floatSpeed = 0.01, floatDistance = 0.1 }) => {
  const triangleRef = useRef();
  const initialY = useRef(Math.random()).current;
  const direction = useRef(Math.random() < 0.5 ? 1 : -1).current;

  useFrame((state, delta) => {
    triangleRef.current.position.y += direction * floatSpeed * delta;

    if (Math.abs(triangleRef.current.position.y - initialY) > floatDistance) {
      direction.current *= -1;
    }
  });

  return (
    <group ref={triangleRef}>
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            array={new Float32Array([0, 0, 0, 1, 0, 0, 0.5, 1, 0])}
            count={3}
            itemSize={3}
          />
        </bufferGeometry>
        <meshBasicMaterial color="blue" side={2} />
      </mesh>
    </group>
  );
};

export default Triangle;
