import React, { Component } from 'react'
import '../css/Orientation.css';


import Header from './Header';
import ButtonHelper from './ButtonHelper';
import Footer from './Footer';
import TiledMap from './map/Grid';
import Welcome from './Welcome';
import skinsss from './map/Skin';
import { changeSkin1 } from './Modal';


export default function CekOrientation({skin}) {

  return (
    <div className="orientation">
      <div className="landscape">
        <Welcome />
          <TiledMap/>
        <Header />
        <ButtonHelper />
        <Footer />
      </div>
      <div className="potrait">
        <div className="phone">
        </div>
        <div className="message">
          For better experience, <br></br>
          Please rotate your device
        </div>
      </div>
    </div>
  )
}