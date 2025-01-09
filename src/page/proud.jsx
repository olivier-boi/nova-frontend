import React from 'react'
import ifoto from "../image/ok1.png"
import "../styles/proud.css"

 const Proud = () => {
  return (
    <div className='proud-container'>
        <div className="proud-left">
            <img src={ifoto} alt="doc" />
        </div>
        <div className="proud-right">
            <h1>proud to be of the nation best </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio e
                xcepturi voluptatibus praesentium 
                saepe vel cupiditate rem facilis ratione inventore et?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio e
                xcepturi voluptatibus praesentium 
                saepe vel cupiditate rem facilis ratione inventore et?</p>
                <button className='btn'>Learn more..</button>
        </div>
    </div>
  )
}
export default  Proud
