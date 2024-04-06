import { Html } from "@react-three/drei";
import Newspaper from "./Newspaper";
import Title from "./Title";

export default function Scene({ mouse }) {
  return (
    <>
      <Html fullscreen>
        <Newspaper />
      </Html>
    </>
  );
}
