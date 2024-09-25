import React from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {

  return (

    <div className='w-full h-screen'>

      <div className='absolute text-white top-32 left-1/2 -translate-x-1/2 font-["Helvetica_Now_Display"]'>
        <h3 className='text-4xl masked tracking-tighter font-[550] glow-text'>Macbook Pro Created By Md. Sifat</h3>
      </div>

    <Canvas camera={{ fov: 20, position: [0, 2, 220] }}>
      <OrbitControls />
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/blue_photo_studio_4k.hdr"]} />
      <ScrollControls pages={3}>

      <MacContainer />

      </ScrollControls>
      
    </Canvas>

    </div>
  )
}

export default App
