import React from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Dots from "./components/Dots";

export default function Scene() {
  return (
    <Canvas orthographic camera={{ zoom: 20 }}>
      <Dots />

      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
