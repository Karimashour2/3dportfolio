import React,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Earth = () => {

  const earth= useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={earth.scene}
      scale={3}
      position={[0,0.9,0]}
      rotation={[0,0,0.2]}
    />
  )
}

const EarthCanvas = ()=> {
  return (
    <Canvas
      className='cursor-grab'
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-5, 2, 6]
       }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;