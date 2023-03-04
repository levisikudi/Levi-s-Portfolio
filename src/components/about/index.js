import React from 'react'
import memoji from '../../images/fist-bump-sticker.png'
import './index.css'


const About = () => {
  return (
    <div id='about' className='container py-5 my-5'>
        <div className='row'>

            <div className='col'>
                <p>Hi, I'm Levi Sikudi</p>
                <h1 className='mb-5'>A Fullstack Web Developer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
                </p>
                
            </div>

            <div className='col d-flex justify-content-center'>
                <img className='img-fluid' src={memoji} alt='memoji'/>
            </div>

        </div>
    </div>
  )
}

export default About