import React from 'react'
import { Canvas } from '@react-three/fiber';
import './styles.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';

const App = () => {
  return (  
    <div className='w-full h-screen font-[Poppins]'>
      <div className="navbar line flex gap-10 py-10 absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer">
          {['iPhone' , 'iPad' , 'Contact Us' , 'Products' , 'Services'].map(e => 
            <a href='' className='text-white font-[500] text-sm capitalize cursor-pointer'>
              {e}
            </a>
          )}
      </div>
      <div className='absolute text-white top-40 left-1/2 -translate-x-1/2 transform text-center font-["Poppins"]'>
        <h3 className='masked text-7xl tracking-tighter font-[700]'>Macbook Pro</h3>
        <h5 className='text-lg mt-2'>Oh so Pro!</h5>
        <p className='w-[80%] mx-auto mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio hic exercitationem a molestias.</p>
      </div>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr'
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas> 
    </div>
  );
}

export default App;
