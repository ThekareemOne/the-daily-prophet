import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { useCallback, useRef } from "react";
import Newspaper from "./Newspaper";

export default function App() {
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );

  return <Newspaper />;
}
