 import React from 'react'

export const card = ({title,name,image,specialization,patient,desc,icon}) => {
  return (
    <div className='card'>
        <div className="doctorimage">
            <img src={image} alt="" />
        </div>
        <div className="doctorinfo">
            <h1>{name}</h1>
            <span>{title}</span>
            <span>{specialization}</span>
        </div>
        <div className="content">
            <div>
                <h4>{patient}</h4>
                <p>{desc}</p>
            </div>
            <div className="icon">
                <i>{icon}</i>

            </div>
        </div>
    </div>
  )
}
export default card