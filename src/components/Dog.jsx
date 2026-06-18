// import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Dog = () => {
  const model = useGLTF("/models/dog.drc.glb");
  return (
    <>
      <primitive object={model.scene} position={[0, 0, 0]} />
      <directionalLight position={[5, 5, 5]} color={"teal"} intensity={10} />
      <OrbitControls />
    </>
  );
};

export default Dog;
