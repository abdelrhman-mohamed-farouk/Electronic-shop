
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter  >
  
  <App />
  </BrowserRouter>
  <Toaster/>
  
  </>
)


// #Essentials
// npm i -D react-router-dom@latest
// npm i sass
// npm i bootstrap@latest

// npm i axios

// #State Management
// npm install @reduxjs/toolkit react-redux
// npm i recoil

// #Fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest

// #Optional
// npm i sweetalert2
// npm i swiper
// npm i wowjs