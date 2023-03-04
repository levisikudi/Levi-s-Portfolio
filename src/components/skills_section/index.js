import React from 'react'
import './index.css'

const Skills = () => {
  return (
    <div id='skills-section'className='container my-5 py-2'>
      <h1 className='display-4 mb-5'>Skills</h1>
      <div className='row text-center'>
        <div className='col-md-5 d-flex justify-content-around row'>
            <i className="fa-brands  col col-md-3 fa-html5">
              <p className='pt-2'>HTML5</p>
            </i>
            <i className="fa-brands col col-md-3 fa-css3">
              <p className='pt-2'>CSS3</p>
            </i>
            <i className="fa-brands col col-md-3 fa-react">
              <p className='pt-2'>ReactJS</p>
            </i>
            <i className="fa-brands col col-md-3 fa-node">
              <p className='pt-2'>Node.js</p>
            </i>
            <i className="fa-brands col col-md-3 fa-js">
              <p className='pt-2'>JavaScript ES6</p>
            </i>
            <i className="fa-brands col col-md-3 fa-git-alt">
              <p className='pt-2'>Git</p>
            </i>
            <i className="fa-brands col col-md-3 fa-github">
              <p className='pt-2'>Github</p>
            </i>
            <i className="fa-brands col col-md-3 fa-bootstrap">
              <p className='pt-2'>Bootstrap</p>
            </i>
            <i className="fa-solid col col-md-3 fa-terminal">
              <p className='pt-2'>Command Line</p>
            </i>
        </div>
        <div className='col-md-7 d-flex text-end justify-content-center align-items-center px-2'>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills

