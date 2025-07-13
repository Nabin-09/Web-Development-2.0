import React from 'react'
import {Canvas} from '@react-three/fiber';
import './styles.css'
import { OrbitControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (
    <Canvas>
        <OrbitControls/>
        <MacContainer/>
    </Canvas> 
  );
}

export default App
