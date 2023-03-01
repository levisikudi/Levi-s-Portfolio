import React from 'react'
import './index.css'
import seriousMemoji from '../../images/serious-sticker.png'
// import projectApi from '../../../project-data'

const Projects = () => {


  // let projectJSX = projectApi.map((project)=>{
  //   return(
      
  //   )
  // })

  

  return (
    <div id='projects-section'className='container my-5 py-5'>
        <h1 className='display-4 text-center'>Projects</h1>
        <div className='row border-light'>
            <div className='lef col border'>
              <img src={seriousMemoji}/>
            </div>
            <div className='ryt col border'>
              <h3>The Serious Emoji</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto  dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
              </p>
              <div>
                <button className='btn btn-outline-success'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
        <div className='row'>
            <div className='lef col border'>
              <img src={seriousMemoji}/>
            </div>
            <div className='ryt col border'>
              <h3>The Serious Emoji</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto  dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
              </p>
              <div>
                <button className='btn btn-outline-success'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
        <div className='row border-light'>
            <div className='lef col border'>
              <img src={seriousMemoji}/>
            </div>
            <div className='ryt col border'>
              <h3>The Serious Emoji</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto  dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
              </p>
              <div>
                <button className='btn btn-outline-success'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects