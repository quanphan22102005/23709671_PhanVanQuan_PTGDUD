import React from 'react'
import "./Button.css"

const Button = ({onClick}) => {
  return (
    <div>
      <button className = "btn" onClick = {onClick}>
        Login
      </button>
    </div>
  )
}

export default Button
