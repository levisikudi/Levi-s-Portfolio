import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-md sticky-top navbar-dark bg-black  ">
        <div className="container ">
            <div className="navbar-brand">Levi's</div>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="expandation">
                <ul className="navbar-nav navbar-nav-scroll">
                    <li className="nav-item mx-4"><a href="#hero-section" className="nav-link">Home</a></li>
                    <li className="nav-item mx-4"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item mx-4"><a href="#skills-section" className="nav-link">Skills</a></li>
                    <li className="nav-item mx-4"><a href="#projects-section" className="nav-link">Projects</a></li>
                    <li className="nav-item mx-4"><a href="#contact-section" className="nav-link">Contact</a></li>
                </ul> 
            </div>       
        </div>
    </nav>
  )
}

export default Navbar