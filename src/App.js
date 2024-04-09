import { AppProvider, useAppContext } from "./AppContext";
import Scene from "./Scene";
import Newspaper from "./Newspaper";

export default function App() {
  return (
    <AppProvider>
      <Wrapper />
    </AppProvider>
  );
}

const Wrapper = () => {
  const { showScene } = useAppContext();

  return <>{showScene ? <Scene /> : <Newspaper />}</>;
};
