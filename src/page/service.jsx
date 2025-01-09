import React from 'react'
import"../styles/service.css"
import Servicecard from "../component/servicecard"
import {cardData} from "../data/jsondata"
 const Service = () => {
  return (
    <div>
      <div className="service-content">
        <h1>OUR SERVICE PROVIDED</h1>
       <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="service-card-wraper">
     {
      cardData.map((cardItem,index) =>(
        <Servicecard
        key={index}
        title={cardItem?.title}
        content={cardItem?.description}
        icons={cardItem?.icon}
        number={index + 1}
        />
      ))
     }
 
      </div>
    </div>
  )
}
export default Service
