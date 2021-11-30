import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bgColorOfNavbar py-3">
               <div className="container-fluid">
               <a className="navbar-brand ms-5" href="#">
                    <img className="navbarImage rounded rounded-circle" src="https://i.ibb.co/vZ9rRJ4/web-boss.png" alt="" />
               </a>
               <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                         <a className="nav-link text-white fs-5" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link text-white fs-5 ms-2" href="#knowMeMore">About Me</a>
                    </li>
                    
                    <li className="nav-item">
                         <a href="#works" className="nav-link text-white fs-5 ms-2">Works</a>
                    </li>
                    <li className="nav-item">
                         <a href="#mySkills" className="nav-link text-white fs-5 ms-2">Skills</a>
                    </li>
                    <li className="nav-item">
                         <Link to="/myblog" className="text-decoration-none">
                              <a href="#" className="nav-link text-white fs-5 ms-2">Blog</a>
                         </Link>
                    </li>
                    <li className="nav-item me-5">
                         <a href="#contactHare" className="nav-link text-white fs-5 ms-2">Contact Me</a>
                    </li>
                    </ul>
               </div>
               </div>
          </nav>
     )
}

export default Navbar
