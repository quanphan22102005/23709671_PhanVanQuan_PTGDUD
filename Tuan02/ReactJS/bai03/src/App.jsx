import React, {useState} from 'react'
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';

const App = () => {
  const [alertType, setAlertType] = useState(null);

  return (
    <div style={{padding: "20px"}}>
      <Alert type = {alertType}/>

      <Button type = "success"
              onClick = {() => setAlertType("success")} >
        Success
      </Button>

      <Button type = "warning"
              onClick = {() => setAlertType("warning")}>
        Warning
      </Button>

      <Button type= "error" 
              onClick = {() => setAlertType("error")}>
        Error
      </Button>
    </div>
  )
}

export default App
