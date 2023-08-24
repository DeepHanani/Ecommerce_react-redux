import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div class="footer">
      <div class="div-1">
        <div class="imp">
          <div class="brand">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTervYQ39ToB-6vICysXF8z4j9bbqV7tuB7tcCmX1q-dpxRI1BxtC_1QDrV2Bqakb6vkVM&usqp=CAU"
              alt=""
            />
          </div>
          <div class="cakes">
            <p class="cake">CLOTHS</p>
           {/* <p class="uix">UIX designer</p>  */}
          </div>
        </div>
        <p class="advise">
          You’ll feel like royalty when you order from us because all our food
          is made with love to order. The happiness of people is our priority at
          (Delivery Hero)
        </p>
      </div>
      <div class="div-2">
        <div class="home">
          <p>Quick Links</p>
          <ul>
            <li><Link  to = "/" className='homeLink'>Home</Link></li>
            <li><Link  to = "/about" className='aboutLink'>About</Link></li>
            <li><Link  to = "/services" className='servicesLink' >Services</Link></li>
            <li><Link to= "/contact" className='contactLink'>Contact Us</Link></li>
          </ul>
        </div>
        <div class="quality">
          <p>opning</p>
          <ul>
            <li>Monday</li>
            <li>thuesday</li>
            <li>Wenseday</li>
            <li>thasday</li>
            <li>Friday</li>
            <li>Sturday</li>
            <li>Sunday</li>
          </ul>
        </div>
      </div>
      <div class="div-3">
        <p class="contactus">Contact Us</p>
        <p class="adress">709 , Dvij Infotech Ahmedabad</p>
        <p class="number">NO-9824391440</p>
      </div>
    </div>
  )
}