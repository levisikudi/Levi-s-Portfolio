import React from 'react'
import './index.css'

const Footer = () => {

  

  return (
    <footer className='container-fluid bg-dark text-center'>
      <div className='row'>
        <div className=' col-12'>
          <a href='https://github.com/levisikudi' target='_blank'><i class="fa-brands fa-github"></i> </a>
          <a href='https://www.linkedin.com/in/levi-sikudi-514a9a188/' target='_blank'><i class="fa-brands fa-linkedin"></i></a>   
        </div>
        <div className='col-12'>
          <p>Designed and Engineered by Levi Sikudi</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer