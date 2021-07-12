import '../css/Welcome.css';
import React, { Component, useEffect, useState } from "react";
import Logo from '../img/logodnfinal.png';

import SideNav from './SideNav';
import Header from './Header';
import ButtonHelper from './ButtonHelper';
import Footer from './Footer';
import Character from './Character';
import Sprite from './sprite';
import Actor from './actor';
import Player from './player';
import OffCanvas from './performance/offcanvas';
import LayerMap from './square/layers';
import TiledMap from './map/Grid';
import Stick from './Stick';
import Music from './Music';
import PreLoader from './Preloader';
import Welcome from './Welcome';



// var setSkin =1;

// function setSkin2(){
//   setSkin == 2;
// }

// export function changeSkin1(){
//   if(setSkin == 1){
//     var skinsss = "did-kun.png";
//     return {skinsss};
//   }
//   if(setSkin == 2){
//     var skinsss = "f1.png";
//     return {skinsss};
//   }
//   if(setSkin == 3){
//     var skinsss = "f2.png";
//     return {skinsss};
//   }
// }

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-welcome display-block" : "modal-welcome display-none";

  var skinsss ="f1.png";
  




  function handleSkin1(){
    handleClose();
    // setSkin2();
  }

  return (
    <div>
    {/* <TiledMap/> */}
{/*     
    <TiledMap skins={skin}/> */}
    <div className={showHideClassName}>
      <section className="modal-main">
        {/* {children} */}
        <div className="greeting">
          <div className="title-modal">
            Hi Stanners!
          </div>
          <div className="paragraph">
            Welcome to Dies Natalis VIrtual Zone, Come on explore !
          </div>
        </div>
        <div className="image col-md-6">
        <img src={Logo} alt='' className="logo"></img>
        </div>
        <div className="modal-footer">
        <button type="button" onClick={handleSkin1}>
          Go
        </button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Modal;