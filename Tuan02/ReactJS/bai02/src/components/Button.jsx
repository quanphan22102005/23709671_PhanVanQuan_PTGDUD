import React from 'react'
import "./Button.css"

const Button = ({type, children}) => {
  return (
    <div>
      <button className = {`btn btn-${type}`}>
        {children}
      </button>
    </div>
  )
}

export default Button
