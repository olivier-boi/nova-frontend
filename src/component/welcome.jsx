import React from 'react'
import"../styles/welcome.css"
import doctor from "../image/rw.png"
 const Welcome = () => {
  return (
    <div className=' welcome-container'>
       
      <div className="left-container">
        <div className="right-container">
          
        </div>

        <h1>Welcome to medicare 👏</h1>
        <h1>In Rwanda</h1>

        <h2>medicare 
          protect our life
          
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?
        consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?
        consectetur adipisicing elit. Quae cupiditate dicta reiciendis iure?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit
          aspernatur quis quos voluptatem aliquid quas optio ad nulla aperiam.0
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reprehenderit
          aspernatur quis quos voluptatem aliquid quas optio ad nulla aperiam.0
        </p>
        <button>Get start</button>
        <div className='contents' >
        <div>
          <span>30+</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <span>30+</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <span>30+</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
        </div>
      </div>
      <div className="right-container">
        <img src={doctor}  alt="Doctor_picture"/>
       Rwanda medicare
      </div>
    </div>
  )
}
export default Welcome
