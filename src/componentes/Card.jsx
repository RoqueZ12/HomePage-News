import React from "react";
import pcs from '../assets/image-retro-pcs.jpg'
import laptos from '../assets/image-top-laptops.jpg'
import gaming from '../assets/image-gaming-growth.jpg'
import '../styles.css/card.css'
const Card = () =>{
  return(
    <div className="card-container">
      <ul>
        <li className="top1">
          <div className="items">
            <div className="items-img">
              <img src={pcs} />
            </div>
            <div className="items-text">
              <h3>01</h3>
              <p>Reviving Retro PCs</p>
              <span>What happens when old PCs are given modern upgrades?</span>
            </div>
          </div>
        </li>
        <li className="top2">
          <div className="items">
              <div className="items-img">
                <img src={laptos} />
              </div>
              <div className="items-text">
                <h3>02</h3>
                <p>Top 10 Laptops of 2022</p>
                <span>Our best picks for various needs and budgets</span>
              </div>
            </div>
        </li>
        <li className="top3">
          <div className="items">
              <div className="items-img">
                <img src={gaming} />
              </div>
              <div className="items-text">
                <h3>03</h3>
                <p>The Growth of Gaming</p>
                <span>How the pandemic has sparked fresh opportunities</span>
              </div>
            </div>
        </li>
      </ul>
    </div>
  )
}
export {Card}