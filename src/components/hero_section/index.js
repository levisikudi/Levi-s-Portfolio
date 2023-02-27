import React from 'react'
import './index.css'

const HeroSection = () => {
  return (
    <div className=' hero container-fluid bg-dark '>
        <div className='container'>
            <p className='text-success'>&lt;name&gt;</p>
            <h1 className='text-light title'>Levi Sikudi</h1>
            <p className='text-success'>&lt;profession&gt;</p>
            <h2 className='display-4 text-light-emphasis'>I am a Software Engineer.</h2>
        </div>
    </div>
  )
}

export default HeroSection