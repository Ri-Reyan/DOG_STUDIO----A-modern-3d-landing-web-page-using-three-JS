// import { Canvas } from "@react-three/fiber";
import {
  // OrbitControls,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Dog = () => {
  gsap.registerPlugin(useGSAP());
  gsap.registerPlugin(ScrollTrigger);

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

  const barnchMaterial = new THREE.MeshStandardMaterial({
    branchNormalMap: branchNormalMap,
    branchMap: branchMap,
    color: "black",
  });

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else if (child.name.includes("BRANCH")) {
      child.material = barnchMaterial;
    }
  });

  const modelRef = useRef(model);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-3",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(modelRef.current.scene.position, {
      z: "-=0.75",
      y: "+=0.1",
    })
      .to(modelRef.current.scene.rotation, {
        x: `+=${Math.PI / 18}`,
      })
      .to(
        modelRef.current.scene.rotation,
        {
          y: `-=${Math.PI}`,
        },
        "third",
      )
      .to(
        modelRef.current.scene.position,
        {
          x: "-=0.5",
          z: "+=0.37",
          y: "+=0.2",
        },
        "third",
      );
  }, []);

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.14, -0.64, 0.7]}
        rotation={[0, Math.PI / 6.8, 0]}
      />
      <directionalLight position={[0, 2, 2]} color={"white"} intensity={10} />
      {/* <OrbitControls /> */}
    </>
  );
};

export default Dog;
