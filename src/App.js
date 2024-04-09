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

  return (
    <div className={showScene ? "text-lime-300 bg-black" : "bg-stone-300"}>
      <Newspaper />
      {showScene && (
        <div className="flex-grow fixed top-0 left-0 w-full h-full">
          <Scene />
        </div>
      )}
    </div>
  );
};
