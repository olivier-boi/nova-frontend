import React from 'react'
import doctor1 from '../image/ok.png'
import location from '../image/location.png'
import ambulance from '../image/ambulance.png'
import contact from '../image/contact.png'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "../styles/about.css"
export const about = () => {
  return (
    <div className="about-container">
      <div className="about-upper"> 
        <h1>providing the best medical service</h1>
        <p>Lorem ipsum dol Blanditiis animi recusandae, 
          ut vel illo nihil deserunt perspiciatis asperiores? Quo, facere.</p>
      </div>


      <div className="about-lower">

        <div className="aboutcard">
          <div className="cardimage"><img src={doctor1} alt="" /></div>
          <div className="cardcontent">
            <h1>Find doctor</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicin</p>
          </div>
          <span className='icons'><HiOutlineArrowSmRight /></span>
        </div>
        <div className="aboutcard">
          <div className="cardimage"><img src={ambulance} alt="" /></div>
          <div className="cardcontent">
             <h1>help us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicin</p>
          </div>
          <span className='icons'><HiOutlineArrowSmRight /></span>
        </div>
        <div className="aboutcard">
          <div className="cardimage"><img src={contact} alt="" /></div>
          <div className="cardcontent">
            <h1>contact us</h1>
            <p>Phone:0791875132
              Email:olivierkagame083@gmail.com
            </p>
          </div>
          <span className='icons'><HiOutlineArrowSmRight /></span>
        </div>
        <div className="aboutcard">
          <div className="cardimage"><img src={location} alt="" /></div>
          <div className="cardcontent">
            <h1>location</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicin</p>
          </div>
          <span className='icons'><HiOutlineArrowSmRight /></span>
        </div>
      </div>
    </div>
  )
} 
export default about
