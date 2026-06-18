// import { Canvas } from "@react-three/fiber";
import {
  // OrbitControls,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const Dog = () => {
  const model = useGLTF("/models/dog.drc.glb");

  useThree(({ camera, gl }) => {
    camera.position.z = 1;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace - THREE.SRGBColorSpace;
  });

  const { actions } = useAnimations(model.animations, model.scene);

  const [normalMap, sampleMatCap] = useTexture([
    "dog_texture.jpg",
    "/matcap/mat-2.png",
  ]).map((textures) => {
    textures.flipY = false;
    textures.colorSpace = THREE.SRGBColorSpace;
    return textures;
  });

  const [branchMap, branchNormalMap] = useTexture([
    "/branches_diffuse.jpeg",
    "branches_normals.jpeg",
  ]).map((textures) => {
    textures.colorSpace = THREE.SRGBColorSpace;
    return textures;
  });

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    // color: "teal",
    matcap: sampleMatCap,
  });

  const barnchMaterial = new THREE.MeshBasicMaterial({
    branchNormalMap: branchNormalMap,
    branchMap: branchMap,
    color: "orange",
  });

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else if (child.name.includes("BRANCH")) {
      child.material = barnchMaterial;
    }
  });
  return (
    <>
      <primitive
        object={model.scene}
        position={[0.25, -0.5, 0.15]}
        rotation={[0, 45, 0]}
      />
      <directionalLight position={[0, 2, 2]} color={"white"} intensity={10} />
      {/* <OrbitControls /> */}
    </>
  );
};

export default Dog;
