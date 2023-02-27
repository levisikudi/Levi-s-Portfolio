import React from 'react'
import './index.css'

const Projects = () => {
  return (
    <div className='container my-5 py-5'>
        <h1 className='display-4 text-center'>Projects</h1>
        <div className='row border-light'>
            <div className='lef col border'>Project Screenshot</div>
            <div className='ryt col border'>Description</div>
        </div>
        <div className='row border-light'>
            <div className='lef col border'> Description</div>
            <div className='ryt col border'>Project Screenshot</div>
        </div>
        <div className='row border-light'>
            <div className='lef col border'>Project Screenshot</div>
            <div className='ryt col border'>Description</div>
        </div>
    </div>
  )
}

export default Projects