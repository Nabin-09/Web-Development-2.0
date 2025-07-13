import { useGLTF } from '@react-three/drei'
import React from 'react'

const MacContainer = () => {
  let model = useGLTF('./mac.glb')
  return (
    <mesh>
        <boxGeometry/>
    </mesh>
  )
}

export default MacContainer
