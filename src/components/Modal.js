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

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-welcome display-block" : "modal-welcome display-none";

  var skin ="f1.png";
  
  function handleSkin1(){
    handleClose();
    // audio.play();
    // const useAudio = playornot => {
    //   const [audio] = useState(new Audio('./audio/music.mp3'));
    //   const [playing, setPlaying] = useState(true);
    
    //   const toggle = () => setPlaying(!playing);
    
    //   useEffect(() => {
    //       playing ? audio.play() : audio.pause();
    //     },
    //     [playing]
    //   );
    
    //   useEffect(() => {
    //     audio.addEventListener('ended', () => audio.play());
    //     return () => {
    //       audio.removeEventListener('ended', () => audio.play());
    //     };
    //   }, []);
    
    //   return [playing, toggle];
    // };
    // <Game skin="f2.png"/>  
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
            Hai Stanners!
          </div>
          <div className="paragraph">
            Welcome to Dies Natalis VIrtual Zone, Come on explore !
          </div>
        </div>
        <div className="image">
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