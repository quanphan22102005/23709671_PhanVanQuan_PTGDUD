import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Tìm phần tử có id là 'root' trong file index.html và render App vào đó
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)