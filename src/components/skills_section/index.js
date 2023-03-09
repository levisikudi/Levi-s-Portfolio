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
        <div className='col-md-7 text-end d-flex align-items-center row'>
          <p className='col-12 d-flex justify-content-around'>
           <div>
              <h1 className='display-6 mb-5'>Frontend</h1>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                
                </ul>
            </div>
           <div>
              <h1 className='display-6 mb-5'>Backend</h1>
              <ul>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Mongoose</li>
                
              </ul>
            </div>
           <div>
              <h1 className='display-6 mb-5'>Tools</h1>
              <ul>
                <li>Bootstrap</li>
                <li>Github & Git</li>
                <li>Command Line</li>
                <li>Socket.io</li>
               
              </ul>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills

