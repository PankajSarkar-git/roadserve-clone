import React from 'react'
import "../ComponentsCss/PrimaryButton.css";

const PrimaryButton = ({button}) => {
  return (
    <div>
      <div className='button'>
      {button}
      </div>
    </div>
  )
}

export default PrimaryButton
