import React from 'react'
import '../css/Orientation.css';


// import SideNav from './SideNav';
import Header from './Header';
import ButtonHelper from './ButtonHelper';
import Footer from './Footer';
// import Character from './Character';
// import Sprite from './sprite';
// import Actor from './actor';
// import Player from './player';
// import OffCanvas from './performance/offcanvas';
// import LayerMap from './square/layers';
import TiledMap from './map/Grid';
// import Stick from './Stick';
// import Music from './Music';
// import PreLoader from './Preloader';
import Welcome from './Welcome';

export default function CekOrientation({skin}) {

  return (
    <div className="orientation">
      <div className="landscape">
        <Welcome />
        <TiledMap skins="did-kun.png"/>
        <Header />
        <ButtonHelper />
        <Footer />
      </div>
      <div className="potrait">
        <div class="phone">
        </div>
        <div class="message">
          For better experience, <br></br>
          Please rotate your device
        </div>
      </div>
    </div>
  )
}