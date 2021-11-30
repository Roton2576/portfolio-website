import React from 'react'
import './Headers.css'
import { Typewriter } from 'react-simple-typewriter'
import pdf from '../../Front-End Resume.pdf'

const Headers = () => {
     return (
          <div className="headersContainer">
               <div className="headersContent">
                    <h3 className="text-white mb-4 fs-1"> Welcome </h3>
                    <h1 className="text-white mb-4 fw-bold">
                         I'm a 
                    <span style={{ color: '#20C997', fontWeight: 'bold', marginLeft: '10px' }}> 
                         <Typewriter
                              words={['Web Developer', 'Web Designer', 'Freelancer']}
                              loop
                              cursor
                              cursorStyle='_'
                              typeSpeed={70}
                              deleteSpeed={50}
                              delaySpeed={1500}
                         />
                    </span>
                    </h1>
                    <h5 className="text-white mb-5 fs-4"> Happy Programmers ! Codeing. </h5>
                    <a href="" className="btn btn-outline-success me-4 headersContentButton"> HIRE ME </a>
                    <a href={pdf} download className="btn btn-outline-success ms-4 headersContentButton"> DOWNLOAD RESUME <i className="fas fa-download ms-2 fs-3"></i> </a>
               </div>
          </div>
     )
}

export default Headers
