import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import  Cards  from "./components/Cards"
import Service from "./components/Service";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact"
import ShowAll from "./components/ShowAll"
import Footer from "./components/Footer"
function App() {

  return (
    <>
    <div >
    <Navbar/>
    <Hero/>
    <Cards/>
    <Service/>
    <Feedbacks/>
    <Contact/>
    <ShowAll/>
    <Footer/>
    </div>
    </>
  )
}

export default App
