import React from 'react'
import "./Alert.css"

const Alert = ({type}) => {
    if(!type) return null;

  return (
    <div className = {`alert alert-${type}`}>
        Hello React Huhu
    </div>
  )
}

export default Alert
