import React  from "react";
import fondo from '../assets/image-web-3-desktop.jpg'
import '../styles.css/home.css'
const Home = ()=>{
  return(
    <div className="home-container">
      <div className="home-img">
        <img src={fondo}/>
      </div>
      <div className="home-section">
        <div className="section-title">
          <h1>The Bright <br></br>
          Future of <br></br>Web 3.0?</h1>
        </div>
        <div className="section-read">
          <p>We dive into the nest evolution of the web that claims
            to put the power of the plataforms back into the hands of the
            people. But is it really fulfiling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  )
}
export {Home}