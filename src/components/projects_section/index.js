import React from 'react'
import './index.css'
import seriousMemoji from '../../images/serious-sticker.png'

const Projects = () => {


  return (
    <div id='projects-section'className='container my-5 py-5 '>
        <h1 className='display-4 text-center py-5 my-5'>Projects</h1>
        <div className='row '>
            <div className='col container text-center'>
              <img id='pic'className='img-fluid' src='http://res.cloudinary.com/dtvq6pgc4/image/upload/v1678362716/yxtfuhlxozlxdo4iagy7.png'/>
            </div>
            <div className=' col p-3'>
              <h3>Catnip</h3>
              <p>
                Catnip is a web app that allows cat owners to communually ond over their cats. Unlike other apps, Catnip strives to keep the feline friend first, before all else.</p>
                <br/>
                <p>This project was my final project at Per Scholas bootcamp and was a test to see how much I had learned during the course of the program. I incorporates the MERN stack for front and back end functionalities and Passport.js for authentication purposes. Using, CRUD functionalities, it enables seamless manipulatiion of data from client to server to database and back. It also uses Cloudinary (an external image hosting API), to host media files. It also incorporates other tools and libraries such as Bootstrap for stylying, Moment.js for parsing date formats as well as other tools
              </p>
              <div>
                <a href='https://catnip-151h.onrender.com' target="#" className='btn btn-outline-success me-2'>Live</a>
                <a href='https://github.com/levisikudi/Catnip' target="#" className='btn btn-outline-success'>Code</a>
              </div>
            </div>
        </div>
        <div className='row'>
            <div className=' col '>
              <img className='img-fluid' src={seriousMemoji}/>
            </div>
            <div className=' col p-3'>
              <h3>Product Store</h3>
              <p>
                The Product Store is a basic Web site built by MongoDB, JavaScript and Node.JS as an exhibit of my skills at that time. It 
              </p>
              <div>
                <button className='btn btn-outline-success me-2'>Live</button>
                <button className='btn btn-outline-success'>Code</button>
              </div>
            </div>
        </div>
        <div className='row '>
            <div className=' col'>
              <img className='img-fluid' src={seriousMemoji}/>
            </div>
            <div className=' col p-3'>
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