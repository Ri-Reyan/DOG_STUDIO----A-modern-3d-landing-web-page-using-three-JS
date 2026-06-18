import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <Canvas>
        <Dog />
      </Canvas>
    </div>
  );
};

export default App;
