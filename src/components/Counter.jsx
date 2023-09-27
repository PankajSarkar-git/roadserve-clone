import React from 'react'
import "../ComponentsCss/Counter.css"

const Counter = () => {
  return (
    <div className='counter-section'>
      <div className="counter-container">
        <div className="counter-item" id="counter-box1">
            <h3><span>2</span>+</h3>
            <p>Year of Experience</p>
        </div>
        <div className="counter-item" id="counter-box1">
            <h3><span>2</span>K+</h3>
            <p>Number of Mechanics</p>
        </div>
        <div className="counter-item" id="counter-box1">
            <h3><span>6</span>K+</h3>
            <p>Number of Orders</p>
        </div>
        <div className="counter-item" id="counter-box1">
            <h3><span>7</span>K+</h3>
            <p>Number of Happy Customers</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
