import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeContainer from "./index.style";
import Experience from "./experience";
import Blob from "./blob";
import TextExperience from "./text";
import { Leva } from "leva";

const Three = ({}) => {
  return (
    <ThreeContainer>
      <Leva />
      <Canvas shadows dpr={1} camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 20] }}>
        {/* <Experience /> */}
        {/* <Blob /> */}
        <TextExperience />
      </Canvas>
    </ThreeContainer>
  );
};

export default Three;
