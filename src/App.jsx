import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div className="h-screen w-screen top-0 left-0">
      <main
        style={{
          backgroundImage: "url(/background-l.png)",
          backgroundRepeat: "no-repeat",
        }}
        className="h-full w-full z-0 fixed"
      >
        <Canvas>
          <Dog />
        </Canvas>
      </main>
      <Sections />
    </div>
  );
};

export default App;
