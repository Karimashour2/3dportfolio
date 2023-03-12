import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ComputersXS= ()=> {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight 
        intensity={0.3} 
        groundColor='black'
      />
      <pointLight intensity={1}/>
      <spotLight 
        position={[60,-40,30]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene} 
        scale={0.25} 
        position={[0.25, -1, -0.37]} 
        rotation={[0.02, 0.3, -0.2]}
      />
    </mesh>
  )
}

const ComputersCanvasXS= ()=>{
  return (
  <Canvas 
    className="block sm:hidden cursor-grab"
    frameloop="demand" 
    shadows 
    camera={{position: [20,3,5], fov:25}} 
    gl={{preserveDrawingBuffer: true}}
  >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ComputersXS/>
    </Suspense>
    <Preload all />
  </Canvas>
  )
}

export default ComputersCanvasXS;