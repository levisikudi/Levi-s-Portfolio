import React from 'react'
import memoji from '../../images/fist-bump-sticker.png'
import './index.css'


const About = () => {
  return (
    <div id='about' className='container py-5 my-5'>
        <div className='row'>

            <div className='col d-flex justify-content-center justify-content-start'>
                <img className='img-fluid' src={memoji} alt='memoji'/>
            </div>

            <div className='col'>
                 <p className='fst-italic fw-bold'>
                   Hello, I'm Levi Sikudi
                </p>
                <h1 className='mb-5'>A Fullstack Software Engineer</h1>
               
                <p>
                   I am a Fullstack Software Engineer who is passionate about computer programming. I got a <span className='text-warning'>Bachelor's Degree</span> in International relations before working in <span className='text-warning'>management.</span> Then as time went by, I decided to change my field of occupation. Thereafter is when I joined <span className='text-warning'>Per Scholas</span> where I built on my knowledge with <span className='text-warning'>hands-on training with practical projects</span> and thorough instruction.
                </p>
                <p> As a carreer changer, I am equipped with a diverse set of skills that help me look at tasks with a different <span className='text-warning'>perspective</span>. </p>
                <p>
                   In my free time, I play my guitar, go swimming or simply listen to music. I also enjoy watching anime and cooking.
                </p>   
            </div>

            

        </div>
    </div>
  )
}

export default About