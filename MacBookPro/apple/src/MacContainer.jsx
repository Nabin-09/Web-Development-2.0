import { useGLTF , ScrollControls , useScroll , useTexture } from '@react-three/drei'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React from 'react'

const MacContainer = () => {
  let model = useGLTF('./mac.glb');
  let tex = useTexture('./red.jpg')
  let meshes = {};
  model.scene.traverse((e) =>{
     meshes[e.name] = e;
    });

   meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
   meshes.matte.material.map = tex;
   meshes.matte.material.emissiveIntensity = 0;
   meshes.matte.material.metalness = 0;
   meshes.matte.material.roughness = 1;
   let data = useScroll();

   useFrame((state , delta)=>{
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
   })
  return (
    <group position={[0 , -20 , 20]}>
    <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer
