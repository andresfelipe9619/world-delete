import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Planet = ({ textureUrl, rotationSpeed }) => {
  const planetRef = useRef();
  const texture = new TextureLoader().load(textureUrl);

  useFrame(() => {
    planetRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

export default Planet;
