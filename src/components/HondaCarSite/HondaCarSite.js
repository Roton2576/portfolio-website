import React from 'react'
import './HondaCarSite.css'

const HondaCarSite = () => {
     return (
          <div className="container-fluid hondaCarSiteBgcolor">
               <div className="container mx-auto">

                    <div className="hondaCarDetalsImgPadding" data-aos="zoom-out">
                         <h1 className="text-white mb-4"> Honda 24.Car </h1>
                         <img src="https://i.ibb.co/njYMkJY/Honda-Car-Header-part1.png" className="img-fluid" alt="" />
                         <p className="text-white mt-4"> This is a car related website. From here, buyers can easily buy the car of their choice and payment paymentway system has been introduced here. Buyers can pay the price of their car from this site if they want. And this site has Dashboarde system. If the buyer wants, he can see what and how many products he is ordering and if he wants, he can delete it. </p>
                         <p className="text-white"> And the techniques I used on this site are: For Front-End: React.js, JavaScript, HTML, CSS, Material UI, Bootstrap, Firebase Authentication, Stripe for Payment Getaway, Context API.For Back-End: Node.js, Express.js, MongoDB </p>
                    </div>

                    <div className="hondaCarDetalsImgPadding" data-aos="zoom-out">
                         <img src="https://i.ibb.co/C8YHSKw/Honda-Car-Header-part2.png" className="img-fluid" alt="" />
                         <p className="text-white mt-4"> Honda has been the world's largest motorcycle manufacturer since 1959,[2][3] reaching a production of 400 million by the end of 2019,[4] as well as the world's largest manufacturer of internal combustion engines measured by volume, producing more than 14 million internal combustion engines each year.[5] Honda became the second-largest Japanese automobile manufacturer in 2001.[6][7] Honda was the eighth largest automobile manufacturer in the world in 2015.[8] </p>
                    </div>

                    <div className="hondaCarDetalsImgPadding" data-aos="zoom-out">
                         <img src="https://i.ibb.co/6H1H1pK/Honda-Car-Header-part3.png" className="img-fluid" alt="" />
                         <p className="text-white mt-4"> was the first Japanese automobile manufacturer to release a dedicated luxury brand, Acura, in 1986. Aside from their core automobile and motorcycle businesses, Honda also manufactures garden equipment, marine engines, personal watercraft and power generators, and other products. Since 1986, Honda has been involved with artificial intelligence/robotics research and released their ASIMO robot in 2000. </p>
                    </div>

               </div>
          </div>
     )
}

export default HondaCarSite
