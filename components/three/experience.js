import { useRef } from "react";
import { button, useControls } from "leva";
import { BakeShadows, useHelper, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Experience = ({}) => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
  });

  const sphere = useControls({
    position: {
      value: { x: -2, y: 0 },
      step: 0.1,
      joystick: "invertY",
    },
    color: "#ff00c5",
    opacity: 0.5,
    Reset: button(() => {
      console.log("reset");
    }),
  });

  const directionalLightRef = useRef();

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <BakeShadows />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight ref={directionalLightRef} castShadow position={[1, 2, 3]} intensity={1.5} />

      <ambientLight intensity={0.5} />

      <mesh castShadow position={[sphere.position.x, sphere.position.y, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={sphere.color} transparent={true} opacity={sphere.opacity} />
        {/* <Html wrapperClass="r3f-label" position={[1, 1, 0]} center distanceFactor={8} occlude={[cubeRef]}>
          That's a sphere 👍
        </Html> */}
      </mesh>

      <mesh castShadow scale={1.5} position-x={2} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      {/* <TransformControls object={cubeRef} mode="translate" /> */}

      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <meshStandardMaterial color="lightpink" />
      </mesh>

      {/* <Float>
        <Text color="hotpink" fontSize={1} position-y={2}>
          I love r3f
          <meshNormalMaterial />
        </Text>
      </Float> */}
    </>
  );
};

export default Experience;
