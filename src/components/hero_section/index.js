import React from 'react'
import './index.css'
import logo from '../../images/hello-there-sticker.png'

const HeroSection = () => {
  return (
    <div id='hero-section' className=' hero container-fluid bg-dark py-5'>
        <div className='container'>

          <div className='row'>
          
              <div className='col d-flex row'>
                  <p className='text-success  '>&lt;name&gt;</p>
                  <h1 className='text-light title '>Levi Sikudi</h1>
                  <p className='text-success '>&lt;profession&gt;</p>
                  <h2 className='display-4 text-light-emphasis'>I am a Software Engineer.</h2>
              </div>
          
              <div className='col-md-6 col-lg-4  d-flex justify-content-center'>
                  <img className='img-fluid' alt="Levi's Memoji" src={logo}></img>
              </div>

              <div className='row'>
                <h3 className='text-light-emphasis py-5 my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
                </h3>
              </div>

              <div className='row gap-2 d-flex justify-content-sm-center justify-content-md-end'>
                <button type="button" class="btn btn-success col-md-2 col-sm-8 btn-lg ">Skills</button>
                <button type="button" class="btn btn-success col-md-2 col-sm-8 btn-lg ">Contact me</button>
              </div>

          </div>
          
        </div>
    </div>
  )
}

export default HeroSection