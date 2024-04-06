import React, { useMemo } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import lerp from "lerp";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function Title({ mouse }) {
  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = lerp(
        ref.current.position.x,
        mouse.current[0] / aspect / 10,
        0.1
      );
      ref.current.rotation.x = lerp(
        ref.current.rotation.x,
        0 + mouse.current[1] / aspect / 50,
        0.1
      );
      ref.current.rotation.y = 0.8;
    }
  });
  return (
    <group ref={ref}>
      <Text size={10}>The Daily Prophet</Text>
      <group position={[35, -20, 0]} scale={[1, 0.5, 1]}>
        <Ellipse />
        <Ellipse rotation={[0, 0, Math.PI / 3]} />
        <Ellipse rotation={[0, 0, -Math.PI / 3]} />
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
          <meshBasicMaterial attach="material" color="red" />
        </mesh>
      </group>
    </group>
  );
}

function Ellipse(props) {
  const geometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, 10, 3, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(50);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);
  return (
    <line geometry={geometry} {...props}>
      <meshBasicMaterial attach="material" />
    </line>
  );
}
