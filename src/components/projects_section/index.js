import React from 'react'
import './index.css'
import portfolio from '../../images/Portfolio.png'
import store from '../../images/product-store.png'

const Projects = () => {


  return (
    <div id='projects-section'className='container my-5 py-5 '>
        <h1 className='display-4 text-center py-5 my-5'>Projects</h1>
        <div className='row '>
            <div className='col container my-auto text-center'>
              <img id='pic'className='img-fluid' src='http://res.cloudinary.com/dtvq6pgc4/image/upload/v1678362716/yxtfuhlxozlxdo4iagy7.png'/>
            </div>
            <div className=' col p-3'>
              <h3>Catnip</h3>
              <p>
                Catnip is a web app that allows cat owners to communually ond over their cats. Unlike other apps, Catnip strives to keep the feline friend first, before all else. (As per now, it is still under construction)</p>
                <br/>
                <p>This project was my final project at Per Scholas bootcamp. It incorporates the MERN stack for front and back end functionalities using Passport.js for authentication purposes. Using CRUD functionalities, it enables seamless manipulatiion of data from client to server to database and back. It also uses Cloudinary (an external image hosting API), to host media files. It also incorporates other tools and libraries such as Bootstrap for stylying, Moment.js for parsing date formats as well as other tools
              </p>
              <div>
                <a href='https://catnip-151h.onrender.com' target="#" className='btn btn-outline-success me-2'>Live</a>
                <a href='https://github.com/levisikudi/Catnip' target="#" className='btn btn-outline-success'>Code</a>
              </div>
            </div>
        </div>
        <div className='row mb-4'>
            <div className=' col container text-center'>
              <img className='img-fluid' src={store}/>
            </div>
            <div className=' col p-3'>
              <h3>Product Store</h3>
              <p>
                The Product Store is a basic Web site built by MongoDB, JavaScript and Node.JS as an exhibit of my skills at that time. It's basic functionality tests the CRUD data management and database-model relations.</p>
              <div>
                {/* <button className='btn btn-outline-success me-2'>Live</button> */}
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
        <div className='row '>
            <div className='col container text-center'>
              <img className='img-fluid' src={portfolio}/>
            </div>
            <div className=' col p-3 mt-2'>
              <h3>My Portfolio</h3>
              <p>
                This very Portfolio, created by React tests the interelation between functional components. As well as serving it's purpose as my online 'resume', it is also a website where I can track my progress and key in my journey.
              </p>
              <div >
                <button className='btn btn-outline-success me-2'>Live</button>
                <a href='https://github.com/levisikudi/Levi-s-Portfolio' target='#' className='btn btn-outline-success'>Code</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects