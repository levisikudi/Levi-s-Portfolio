import React from 'react'
import './index.css'

const Skills = () => {
  return (
    <div id='skills-section'className='container my-5 py-2'>
      <h1 className='display-4 mb-5'>Skills</h1>
      <div className='row'>
        <div className='col-5 d-flex justify-content-evenly row'>
            <i class="fa-brands skill col fa-html5"></i>
            <i class="fa-brands skill col fa-css3"></i>
            <i class="fa-brands skill col fa-react"></i>
            <i class="fa-brands skill col fa-node"></i>
            <i class="fa-brands skill col fa-js"></i>
            <i class="fa-brands skill col fa-git-alt"></i>
            <i class="fa-brands skill col fa-github"></i>
            <i class="fa-brands skill col fa-bootstrap"></i>
            <i class="fa-solid skill col fa-terminal"></i>
        </div>
        <div className='col-7 d-flex justify-content-center align-items-center px-2'>
          <p className='fs-5 text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, impedit accusamus? Iure adipisci architecto dignissimos beatae error iste, amet facilis at nostrum sit, aut eum assumenda est! Porro, sequi voluptatibus?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills

