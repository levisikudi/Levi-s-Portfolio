import React from 'react'
import './index.css'
import logo from '../../images/hello-there-sticker.png'

const HeroSection = () => {
  return (
    <div className=' hero container-fluid bg-dark py-5'>

        <div className='row'>
        
            <div className='col d-flex row'>
                <p className='text-success '>&lt;name&gt;</p>
                <h1 className='text-light title '>Levi Sikudi</h1>
                <p className='text-success '>&lt;profession&gt;</p>
                <h2 className='display-4  text-light-emphasis'>I am a Software Engineer.</h2>
            </div>
        
            <div className='col d-flex justify-content-center'>
                <img className=''src={logo}></img>
            </div>

        </div>
    </div>
  )
}

export default HeroSection