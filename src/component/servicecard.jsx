import React from 'react'
import "../styles/servicecard.css"
const servicecard = ({ title, content, icons, number }) => {
  return (
    <div className='card'>
      <div className="card-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <div className='iconsnumber'>
          <span className="card-icons">{icons}</span>
          <span  className='card-number'>{number}</span>
      </div>
    </div>
  )
}
export default servicecard