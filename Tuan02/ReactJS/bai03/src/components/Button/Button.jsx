import React from 'react'
import "./Button.css"

const Button = ({type, children, onClick}) => {
  return (
    <div>
      <button 
        className = {`btn btn-${type}`}
        onClick = {onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
