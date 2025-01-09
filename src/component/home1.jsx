import React from 'react'
import"../styles/home1.css"
import doctor from "../image/ok.png"
 const Welcome = () => {
  return (
    <div className=' welcome-container'>
       
      <div className="left-container">
        <div className="right-container">
          
        </div>

        <h1>Welcome to medicare Lorem</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?
        consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?
        consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?
        </p>
        <button>Get start</button>
       
      </div>
      <div className="right-container">
        <img src={doctor}  alt="Doctor_picture"/>
      </div>
    </div>
  )
}
export default Welcome
