import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <div className="navbar-brand">Levi's</div>
            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-evenly" id="expandation">
                <ul className="navbar-nav ">
                    <li className="nav-item mx-5"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item mx-5"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item mx-5"><a href="#" className="nav-link">Contact</a></li>
                </ul> 
            </div>       
        </div>
    </nav>
  )
}

export default Navbar