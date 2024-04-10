import React from "react";
import '../styles.css/article.css'
const Art = () =>{
  return(
    <div className="container-art">
      <div className="title">
      <h3>New</h3>
      </div>
      <div className="art-container">
      <div className="text">
        <h4>Hydrogen VS Electric Cars</h4>
        <p>Will hydrogen-fueled cars ever catch up to EVs</p>
      </div>
      <div className="text">
        <h4>The Downsides of AI Artistry</h4>
        <p>What are the possible adverse effects of on-demand AI
          image generation?
        </p>
      </div>
      <div className="text">
        <h4>Is VC funding Drying Up?</h4>
        <p>Private funding by VC firms is down 50%
          YOY. We take a look at what that means.
        </p>
      </div>
    </div>
    </div>

  )
}
export {Art}