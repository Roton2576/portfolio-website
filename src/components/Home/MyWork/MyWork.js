import React from 'react'
import './MyWork.css'
import { Link } from "react-router-dom";

const MyWork = () => {

     return (
          <div className="myWorkMainDiv">
               <div className="singleWorkFirst shadow p-1 mb-5 bg-white rounded h-75 w-75">
                    
                    <img src="https://i.ibb.co/cg3RNzX/final-First-Site-Img.png" className="img-fluid h-100 w-100 singleWorkFirstImages" alt="" />
                    
                    <div className="d-flex justify-content-between mt-4 singleWorkFirstImageErNiche">
                         <Link to="/hondacarsite">
                              <button className="livePreviewBgColor mx-auto"> More Details </button>
                         </Link>
                    </div>

               </div>

               <div className="singleWorkFirst shadow p-1 mb-5 bg-white rounded h-75 w-75">
                    
                    <img src="https://i.ibb.co/RCRMYnZ/final-Sec-Site-Img.png" className="img-fluid h-100 w-100 singleWorkFirstImages" alt="" />
               
                    <div className="d-flex justify-content-between mt-4 singleWorkFirstImageErNiche">
                         <Link to="/medicalsite">
                              <button className="livePreviewBgColor mx-auto"> More Details </button>
                         </Link>
                    </div>
               </div>

               <div className="singleWorkFirst shadow p-1 mb-5 bg-white rounded h-75 w-75">
                    
                    <img src="https://i.ibb.co/gVHtQDz/fina-Third-Site-Img.png"          className="img-fluid h-100 w-100 singleWorkFirstImages" alt="" /> 
                    
                    
                    <div className="d-flex justify-content-between mt-4 singleWorkFirstImageErNiche">
                         <Link to="/developersite">
                              <button className="livePreviewBgColor mx-auto"> More Details </button>
                         </Link>
                         
                    </div>
               </div>
          </div>
     )
}

export default MyWork
