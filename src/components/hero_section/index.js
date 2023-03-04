import React from 'react'
import './index.css'

const HeroSection = () => {

  const handleClickScroll = () =>{
    const form = document.getElementById('contact-section');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (

    <section className='main'>

      <div id='hero-section' className=' color-overlay d-flex align-items-center justify-content-center hero  py-5'>

          <div className=' container row w-75 '>
            
              <div className='col row '>
                    <h1 className='display-3 text-center'>Levi Sikudi</h1>
                    <h2 className='display-5 text-center'>I am a Software Engineer.</h2>
              </div>

              <div className='row gap-2 d-flex justify-content-sm-center justify-content-md-end'>
                  <button type="button" class="btn btn-outline-success mt-5 col-md-3 py-3 col-sm-8 btn-lg" onClick={handleClickScroll}>Contact me</button>
              </div>

          </div>
            
      </div>

    </section>
     
    
    
  )
}

export default HeroSection