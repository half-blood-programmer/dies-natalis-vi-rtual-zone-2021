import '../css/Stick.css';
import '../css/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faCalendar, faPlay } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Popup from 'reactjs-popup';

import JadwalDisnat from './modal/JadwalDiesnat';
import useKeyPress from './hooks/use-key-press';

export default function Stick () {

  function moveUp(){
      console.log("up");
      useKeyPress(39);
  };

  function moveRight(){
    console.log("right");
  };

  function moveDown(){
    console.log("down");
  };

  function moveLeft(){
    console.log("left");
  };
      
}
