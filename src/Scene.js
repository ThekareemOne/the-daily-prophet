import React from "react";
import { Canvas } from "@react-three/fiber";
import Dots from "./components/Dots";

export default function Scene() {
  return (
    <Canvas orthographic camera={{ zoom: 20 }}>
      <Dots />
    </Canvas>
  );
}
