import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import React from 'react'

const MacContainer = () => {
  let model = useGLTF('./mac.glb');
  let meshes = {};
  model.scene.traverse((e) =>{
     meshes[e.name] = e;
    });

   meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  return (
    <group position={[0 , -10 , 20]}>
    <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer
