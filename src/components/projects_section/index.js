import React from 'react'
import './index.css'
import seriousMemoji from '../../images/serious-sticker.png'
// import projectApi from '../../../project-data'

const Projects = () => {


  return (
    <div id='projects-section'className='container my-5 py-5 '>
        <h1 className='display-4 text-center py-5 my-5'>Projects</h1>
        <div className='row '>
            <div className='lef col '>
              <img className='img-fluid' src={seriousMemoji}/>
            </div>
            <div className='ryt col p-3'>
              <h3>The Serious Emoji</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto  dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
              </p>
              <div>
                <button className='btn btn-outline-success me-2'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
        <div className='row'>
            <div className='lef col '>
              <img className='img-fluid' src={seriousMemoji}/>
            </div>
            <div className='ryt col p-3'>
              <h3>The Serious Emoji</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto  dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
              </p>
              <div>
                <button className='btn btn-outline-success me-2'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
        <div className='row '>
            <div className='lef col'>
              <img className='img-fluid' src={seriousMemoji}/>
            </div>
            <div className='ryt col p-3'>
              <h3 >The Serious Emoji</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto  dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
              </p>
              <div>
                <button className='btn btn-outline-success me-2'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects