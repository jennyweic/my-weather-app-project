import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    <h5>This website was created by Jennifer, {""} 
      <a href="https://github.com/jennyweic" target="_blank" rel="noreferrer">GitHub.</a></h5>
  </React.StrictMode>,
)
