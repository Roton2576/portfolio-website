import React from 'react'
import MySkills from '../MySkills/MySkills'
import MyWork from '../MyWork/MyWork'
import './AboutMe.css'
import pdf from '../../../Front-End Resume.pdf'

const AboutMe = () => {
     return (
          <div className="abouteParantDiv">
               
               <div className="container-fluid knowMeMoreBg">

                    <div className="row container mx-auto">
                    <div className="container">
                    <div className="knowMeMoreBg mt-3" id="knowMeMore" data-aos="fade-down">
                         <h2 className="fw-bold text-white">Know <span className="webDevelopmentIcon">Me</span> More</h2> <hr className="w-50 mx-auto text-white"/>
                    </div>
                    <div className="row d-flex justify-content-around align-items-center">
                         <div className="col-md-6 text-start" data-aos="fade-up">
                              <h2 className="fw-bold mb-4 text-white">I'm <span className="rotonRobidashAbout"> Roton Robidash, </span> a Web Developer</h2>
                              <p className="abouteFirstPara text-white">Hello! My name is Roton Robidash. a front-end developer specializing in building React.js WebApp. I enjoy creating things that live on the internet. My interest in web development started back in 2021, I use Javascript and React.js to create high-end interactive experiences and products.</p>
                              <p className="abouteFirstPara text-white">Skilled in Html5, Css3, Bootstrap, Tailwind, Material UI, JavaScript, ES6, React JS, React Router, Firebase. Express, Mongodb, Node js, Heroku</p>
                         </div>
                         <div className="col-md-5 text-start text-white" data-aos="fade-up">
                              <p className="border-bottom pb-2 w-75"> <span className="fw-bold">Name:&nbsp;</span> Roton Robidash</p>
                              <p className="border-bottom pb-2 w-75"> <span className="fw-bold">E-mail:&nbsp;</span> roton2576@gmail.com</p>
                              <p className="border-bottom pb-2 w-75"> <span className="fw-bold">Age:&nbsp;</span> 22</p>
                              <p className="border-bottom pb-2 w-75"> <span className="fw-bold">Post:</span> &nbsp; MERN Stack Developer</p>
                              <p className="mb-5"> <span className="fw-bold">From:&nbsp;</span> Sherpur, Mymensingh, Bangladesh </p>
                              <a href={pdf} download className="abouteDownloadResume mt-3 text-decoration-none py-3"> DOWNLOAD RESUME <i className="fas fa-download ms-2 fs-3"></i> </a>
                         </div>
                    </div>
                    <div className="row mt-5 mb-5 pt-4">
                         <div className="col-md-3 experienceDiv text-white">
                              <h1> 1+ </h1>
                              <h5> Years experience </h5>
                         </div>
                         <div className="col-md-3 experienceDiv text-white">
                              <h1> 15+ </h1>
                              <h5> Projects Done </h5>
                         </div>
                         <div className="col-md-3 experienceDiv text-white">
                              <h1> 5+ </h1>
                              <h5> Happy Clients </h5>
                         </div>
                         <div className="col-md-3 experienceDiv text-white">
                              <h1> 1+ </h1>
                              <h5> Get Awards </h5>
                         </div>
                    </div>

               </div>

                    </div>
               </div>


               <div className="container-fluid mySkillsBgColorH">
                    <div className="row container mx-auto pb-5">
                         <div className="mt-5 mb-5" data-aos="fade-down">
                                   <h1 className="fw-bold mt-5 text-white"> My <span className="webDevelopmentIcon">Skills</span> </h1> <hr className="w-50 mx-auto text-white"/>
                         </div>
                         <div className="row pb-5">
                              <div id="mySkills" className="pb-5" data-aos="fade-up">
                                   <MySkills></MySkills>
                              </div>
                         </div>
                    </div>
               </div>


               <div className="container-fluid whatIDoBgColorH"> 
                    <div className="row container mx-auto">

                    <div className="mt-5 pt-5" data-aos="fade-down">
                         <h1 className="fw-bold text-white"> What I <span className="webDevelopmentIcon">Do ?</span> </h1> <hr className="w-50 mx-auto text-white"/>
                    </div>

                    <div className="row d-flex justify-content-around mt-5" data-aos="fade-up">
                         <div className="col-md-5 d-flex justify-content-around mb-5">
                              <div>
                                <h2> <i className="fas fa-desktop webDevelopmentIcon shadow p-4 mb-5 me-4 bg-white rounded"></i> </h2>  
                              </div> 
                              <div className="text-start">
                                   <h4 className="fw-bold text-white">Web Development</h4>
                                   <p className="text-white">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                              </div>
                         </div>

                         <div className="col-md-5 d-flex justify-content-around">
                              <div>
                                   <img src="https://i.ibb.co/QDBwgy0/web-design-image-icon-removebg-preview-1.png" className="webDesignIconImg shadow p-4 mb-5 me-4 bg-white rounded" alt="" />  
                              </div> 
                              <div className="text-start text-white">
                                        <h4 className="fw-bold">Web Design</h4>
                                        <p>100% pixel-perfect web pages creation/conversion in HTML from PSD, XD, PDF, DOC, or any kind of flat design source. Codes are W3C validated, crystal-clear, and properly commented.</p>
                              </div>
                         </div>
                    </div>

                    <div className="row d-flex justify-content-around" data-aos="fade-up">
                         <div className="col-md-5 d-flex justify-content-around">
                              <div>
                                <h2> <i className="fas fa-pencil-ruler webDevelopmentIcon shadow p-4 mb-5 me-4 bg-white rounded"></i> </h2>  
                              </div> 
                              <div className="text-start text-white">
                                   <h4 className="fw-bold">UI/UX Design</h4>
                                   <p>I can make UI / UX better, I can make a much better site with ideas from other sites. The user interface is very clear, UI / UX is in high demand right now so you can get me started.</p>
                              </div>
                         </div>

                         <div className="col-md-5 d-flex justify-content-around">
                              <div>
                                   <img src="https://i.ibb.co/SP8tmXF/capture-Code-removebg-preview.png" className="webDesignIconImg shadow p-4 mb-5 me-4 bg-white rounded" alt="" />  
                              </div> 
                              <div className="text-start text-white">
                                        <h4 className="fw-bold">Responsive Web Design</h4>
                                        <p>I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below.</p>
                              </div>
                         </div>
                    </div>

                    </div>
               </div>


               <div className="container-fluid myWorkBgColorH">
                    <div className="row container mx-auto" id="works">
                         <div className="my-4" data-aos="fade-down">
                              <h1 className="fw-bold mt-5 text-white"> My <span className="webDevelopmentIcon"> Work </span> </h1> <hr className="w-50 mx-auto text-white"/>
                         </div>
                         <div className="col-md-12" data-aos="fade-up">
                              <MyWork></MyWork>
                         </div>
                    </div>
               </div>


               <div className="container-fluid contactBgOnno">
                    <div className="row d-flex justify-content-around container mx-auto">
                         <div className="mt-5 text-white" id="contactHare" data-aos="fade-down">
                              <h1 className="fw-bold mt-5"> Get In <span className="webDevelopmentIcon"> Touch </span> </h1> <hr className="w-50 mx-auto mb-5"/>
                         </div>
                         <div className="col-md-3 text-start text-white" data-aos="fade-up">
                              <h3 className="mb-3"> Contact Info: </h3>
                              <h6> <i className="fas fa-envelope iconColorHare me-2"></i> roton2576@gmail.com </h6>
                              <h6> <i className="fas fa-mobile-alt iconColorHare me-2"></i> (+88) 01979-562576 </h6>
                              <h6> <i className="fas fa-map-marker-alt iconColorHare me-2"></i> Sherpur, Mymensingh, Bangladesh </h6>

                              <h4 className="mt-4 mb-3"> FOLLOW ME </h4>
                              <a href="https://www.linkedin.com/in/roton-robidash/" target="_blank"> <i className="fab fa-linkedin fs-3 me-4 text-white"></i> </a>
                              <a href="https://www.facebook.com/roton2576/" target="_blank"> <i className="fab fa-facebook fs-3 me-4 text-white"></i> </a>
                              <a href="https://github.com/Roton2576" target="_blank"> <i className="fab fa-github fs-3 me-4 text-white"></i> </a>
                              <a href="https://www.youtube.com/c/ProgrammingShikhbo" target="_blank"> <i className="fab fa-google fs-3 text-white"></i> </a>
                              
                         </div>

                         <div className="col-md-8" data-aos="fade-up">
                         <form action="https://formspree.io/f/mgedwlvp" method="POST">
                              <div className="d-flex justify-content-between mb-4">
                              <label className="text-white">
                                   Your Name:
                                   <input type="text" name="name" className="contactInputWidth form-control"/>
                              </label>
                              <label className="text-white">
                                   Your email:
                                   <input type="email" name="_replyto" className="contactInputWidth form-control"/>
                              </label>
                              </div>
                              <label className="text-white">
                                   Your message:
                                   <textarea name="message" cols="70" rows="5" className="form-control" placeholder="Tell us more about your needs....."/>
                              </label> <br/>
                              <button type="submit" className="sendMessageContact">Send</button>
                         </form>
                         </div>
                         </div>
                    </div>
          </div>
     )
}

export default AboutMe
