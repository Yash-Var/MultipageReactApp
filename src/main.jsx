import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About'
import App from './App'
import Contact from './Contact'
import './index.css'
import Services from './Services'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <Contact />
    
    <Services />
 
  </React.StrictMode>
)
