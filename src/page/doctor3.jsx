import React from 'react'
import Card from '../component/card'
import { ourdoctor } from '../data/ourdoctor'
import "../styles/doctor3.css"
const Doctor3 = () => {
    return (
        <div className='doctor'>
            <div className="info">
                <h1>Lorem ipsum dolor sit amet </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non aut eaque iure! Obcaecati accusamus amet blanditiis.
                  </p>
            </div>
            <div className="card-wraper">
                {ourdoctor.map((item, index) => (

                <Card
                title={item.title}
                key={index}
                image={item.image} 
                specialization={item.specialization}
                icon={item.icon}
                desc={item.desc}
                patient={item.patient}
                name={item.name}
                />
            ))}
            </div>
        </div>
    )
}
export default Doctor3