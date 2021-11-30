import React from 'react'
import './MySkills.css'

const MySkills = () => {
     return (
          <div className="mySkillMainDiv">
               <div className="skillOnePich">
                    <h1> <i className="fas fa-file-code"></i> </h1>
                    <h5>HTML</h5>
               </div>
               <div className="skillOnePich">
                    <h1> <i className="fab fa-css3-alt"></i> </h1>
                    <h5>CSS</h5>
               </div>
               <div className="skillOnePich">
                    <h1> <i className="fab fa-bootstrap"></i> </h1>
                    <h5>BootStrap</h5>
               </div>
               <div className="skillOnePich">
                    <img src="https://i.ibb.co/JxszqGS/tailwind-icon-image-removebg-preview.png" className="bootstrapImg rounded-circle" alt="" />
                    <h5>BootStrap</h5>
               </div>
               <div className="skillOnePich">
                    <h1> <i className="fab fa-js-square"></i> </h1>
                    <h5> JavaScript </h5>
               </div>
               <div className="skillOnePich">
                    <h1> <i className="fab fa-react"></i> </h1>
                    <h5> React.js </h5>
               </div>
               <div className="skillOnePich">
                    <img src="https://i.ibb.co/gyTzXSW/material-ui-removebg-preview.png" className="bootstrapImg rounded-circle" alt="" />
                    <h5> Material UI </h5>
               </div>
               <div className="skillOnePich">
                    <img src="https://i.ibb.co/N1B5RmQ/firebase-icon-removebg-preview.png" className="bootstrapImg rounded-circle" alt="" />
                    <h5> Firebase </h5>
               </div>
               <div className="skillOnePich">
                    <h1> <i className="fab fa-github-square mb-3"></i> </h1>
                    <h5> GitHub </h5>
               </div>
               <div className="skillOnePich">
                    <img src="https://i.ibb.co/PC4JWWW/express-js-removebg-preview.png" className="bootstrapImg rounded-circle" alt="" />
                    <h5> Express </h5>
               </div>
               <div className="skillOnePich">
                    <h1> <i className="fab fa-node-js"></i> </h1>
                    <h5> Node.js </h5>
               </div>
               <div className="skillOnePich">
                    <img src="https://i.ibb.co/Z2hn08S/mongoDb.jpg" className="bootstrapImg mb-2 rounded-circle" alt="" />
                    <h5> MongoDB </h5>
               </div>
          </div>
     )
}

export default MySkills
