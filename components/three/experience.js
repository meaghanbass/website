import { useRef } from "react";
import { button, useControls } from "leva";
import { Environment, Sky, BakeShadows, useHelper, MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Experience = ({}) => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
  });

  const sphere = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.1,
      joystick: "invertY",
    },
    color: "#ff00c5",
    opacity: 0.5,
  });

  // const { sunPosition } = useControls("sky", {
  //   sunPosition: {
  //     value: [1, 2, 3],
  //   },
  // });

  const { envMapIntensity } = useControls("env", {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
  });

  const directionalLightRef = useRef();

  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <Environment files={["./environmentMaps/2/px.jpg", "./environmentMaps/2/nx.jpg", "./environmentMaps/2/py.jpg", "./environmentMaps/2/ny.jpg", "./environmentMaps/2/pz.jpg", "./environmentMaps/2/nz.jpg"]} />

      {/* <BakeShadows /> */}

      <color args={["ivory"]} attach="background" />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <directionalLight ref={directionalLightRef} castShadow position={sunPosition} intensity={1.5} /> */}

      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <mesh castShadow position={[sphere.position.x, sphere.position.y, 0]}>
        <sphereGeometry />
        <meshStandardMaterial envMapIntensity={envMapIntensity} color={sphere.color} transparent={true} opacity={sphere.opacity} />
        {/* <Html wrapperClass="r3f-label" position={[1, 1, 0]} center distanceFactor={8} occlude={[cubeRef]}>
          That's a sphere 👍
        </Html> */}
      </mesh>

      <mesh castShadow scale={1.5} position-x={2} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial envMapIntensity={envMapIntensity} color="mediumpurple" />
      </mesh>

      {/* <TransformControls object={cubeRef} mode="translate" /> */}

      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <meshStandardMaterial envMapIntensity={envMapIntensity} color="lightpink" />
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
