// import {useContext, useEffect} from 'react';
// import { useState } from "react";
// import Modal from '../Modal';
// import CanvasContext from './canvasContext';
// import {TILE_SIZE} from './constants';

import React from 'react';
import '../../css/Game.css';
import Swal from 'sweetalert2';
import '../../css/Stick.css';
// import '../../css/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import Sprite from '../sprite';
// import Header from '../Header';

// import Popup from 'reactjs-popup';

// import JadwalDisnat from '../modal/JadwalDiesnat';
// import Player from '../player';

export default function TiledMap({skins}){
    var ctx = null;
    var gameMap = [
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16, 10,  2,  2,  2,  2,  2,  2,  2,  7, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10,  2,  2,  2,  2,  2,  2,  2,  7, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 11, 15, 15, 15, 15, 15, 15, 15,  1, 16, 16, 16, 16, 16, 16, 16,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15,  5,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3, 16, 16, 16, 16, 16, 16, 16,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15,  1, 16, 16, 16, 16, 16, 16, 16,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15,  1, 16, 16, 16, 16, 16, 16, 16,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 11, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15,  1, 16, 16, 16, 11, 16, 16, 16,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  5,  2,  2,  2,  4,  2,  2,  2,  4,  2,  6,  2,  2,  2,  2,  2,  4,  2,  2,  2,  2,  2,  6,  2,  4,  2,  2,  2,  4,  2,  2,  2,  3, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 11, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  1, 15, 15, 15, 15, 15, 11, 15, 15, 15,  5,  2,  2,  2,  2,  2,  4,  2,  2,  2,  2,  2,  3, 15, 15, 15, 11, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16,  9,  2,  2,  6,  2,  2,  4,  2,  2,  2,  3, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  5,  2,  2,  2,  4,  2,  2,  6,  2,  2,  8, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0, 16, 16, 16, 16,  1, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15,  1, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  1, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  1, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  1, 15, 15, 15, 15, 15, 15,  1, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  9,  2,  2,  2,  2,  2,  2,  4,  2,  2,  2,  2,  2,  6,  2,  2,  2,  2,  2,  4,  2,  2,  2,  2,  2,  2,  8, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 15,  1, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 15,  1, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 15,  1, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0,
        0,  0,0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,0,  0
    ];
    var tileW = 84, tileH = 65;
    var mapW = 64, mapH = 45;
    var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;
    
    
var mapTileData = new TileMap();



    var tileEvents = {
        //gedung I
        1686: popUpJadwal,
        //gedung J
        1706: popUpJadwal,
        //gedung P
        1632: popUpJadwal,
        //mbm
        1300: popUpJadwal,
        //lap A
        1324: popUpJadwal,
        //SC
        1056: popUpJadwal,
        //laparumput
        1065: alertLapA,
        1066: alertLapA,
        1067: alertLapA,
        1068: alertLapA,
        1069: alertLapA,
        1070: alertLapA,
        1071: alertLapA,

        1129: alertLapA,
        1130: alertLapA,
        1131: alertLapA,
        1132: alertLapA,
        1133: alertLapA,
        1134: alertLapA,
        1135: alertLapA,

        1193: alertLapA,
        1194: alertLapA,
        1195: alertLapA,
        1196: alertLapA,
        1197: alertLapA,
        1198: alertLapA,
        1199: alertLapA,
        
        1257: alertLapA,
        1258: alertLapA,
        1259: alertLapA,
        1260: alertLapA,
        1261: alertLapA,
        1262: alertLapA,
        1263: alertLapA,

        1321: alertLapA,
        1322: alertLapA,
        1323: alertLapA,

        1325: alertLapA,
        1326: alertLapA,
        1327: alertLapA,
        // 22 : drawBridge,
        // 25 : drawBridge,
        // 141 : function(c) { c.placeAt(1,9); },
        // 181 : function(c) { c.placeAt(1,7); }
    };
    // function drawBridge()
    // {
    //     gameMap[toIndex(4,5)] = (gameMap[toIndex(4,5)]==4 ? 2 : 4);
    // }

    function alertLapA(){
    Swal.fire({
        icon: 'succes',
        position: 'top-end',
        imageUrl:"./assets/warning.png",
        imageWidth: "50px",
        text: 'Dilarang melintasi Lapangan A!',
        className: "swal-popup",
        showConfirmButton: false,
        timer: 1200,
        imageAlt: 'A tall image',
        showClass: {
          popup: 'animate__animated animate__fadeInUp',
        },
        backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
        `,
        customClass:{                
          title: 'swal-popup',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }

    function popUpJadwal(){
        Swal.fire({
            titleText:"Merchandise DN VI",
            footer :'<a href="https://portal.pknstan.ac.id/stud/jadkul/kulnow" target="_blank"><button type="button" style=";background-color:blue;border-radius: 10px;width: auto;height: 40px;color: #fafafa;border: 0px;background-color: #292d3e;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">GO TO DN VI YOUTUBE</button></a>',
            showCloseButton: true,
            showConfirmButton:false,
            width: "600px",
            height: "800px",
            padding: "60px",
            background:"url('./background-pop-up.png",
            className: "swal-popup",
            imageUrl: './map.jpg',
            html:'<iframe width="450" height="315" src="https://www.youtube.com/embed/EVM6LBxBSFg" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt="video" style="margin-top:20px;"></iframe>',
            // imageHeight: 00,
            imageAlt: 'A tall image',
            showClass: {
              popup: 'animate__animated animate__fadeInUp',
            },
            backdrop: `
                rgba(0,0,123,0.4)
                url("/images/nyan-cat.gif")
                left top
                no-repeat
            `,
            customClass:{                
              title: 'swal-popup',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    var tileset = null, tilesetURL = "Set-Printilan.png", tilesetLoaded = false;
    var characterset = null, charactersetURL = `${skins}`, charactersetLoaded = false;
    
    var gameTime = 0;
    var gameSpeeds = [
        {name:"Normal", mult:2},
        {name:"Slow", mult:2},
        {name:"Fast", mult:3},
        {name:"Paused", mult:0}
    ];
    var currentSpeed = 0;

    var itemTypes = {
        1 : {
            name : "Star",
            maxStack : 2,
            sprite : [{x:240,y:0,w:40,h:40}],
            offset : [0,0]
        }
    };
    
    function Stack(id, qty)
    {
        this.type = id;
        this.qty = qty;
    }
    function Inventory(s)
    {
        this.spaces		= s;
        this.stacks		= [];
    }
    Inventory.prototype.addItems = function(id, qty)
    {
        for(var i = 0; i < this.spaces; i++)
        {
            if(this.stacks.length<=i)
            {
                var maxHere = (qty > itemTypes[id].maxStack ?
                    itemTypes[id].maxStack : qty);
                this.stacks.push(new Stack(id, maxHere));
                
                qty-= maxHere;
            }
            else if(this.stacks[i].type == id &&
                this.stacks[i].qty < itemTypes[id].maxStack)
            {
                maxHere = (itemTypes[id].maxStack - this.stacks[i].qty);
                if(maxHere > qty) { maxHere = qty; }
                
                this.stacks[i].qty+= maxHere;
                qty-= maxHere;
            }
            
            if(qty==0) { return 0; }
        }
        
        return qty;
    };
    
    function PlacedItemStack(id, qty)
    {
        this.type = id;
        this.qty = qty;
        this.x = 0;
        this.y = 0;
    }
    PlacedItemStack.prototype.placeAt = function(nx, ny)
    {
        if(mapTileData.map[toIndex(this.x, this.y)].itemStack==this)
        {
            mapTileData.map[toIndex(this.x, this.y)].itemStack = null;
        }
        
        this.x = nx;
        this.y = ny;
        
        mapTileData.map[toIndex(nx, ny)].itemStack = this;
    };   

    
var objectCollision = {
	none		: 0,
	solid		: 1
};
var objectTypes = {
	1 : {
		name : "Semak Semak",
		sprite : [{x:280,y:40,w:86,h:65}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 1
	},
	2 : {
		name : "Bunga",
		sprite : [{x:320,y:40,w:86,h:65}],
		offset : [0,0],
		collision : objectCollision.none,
		zIndex : 1
	},
	3 : {
		name : "Gendang",
		sprite : [{x:360,y:40,w:85,h:85}],
		offset : [-20,-20],
		collision : objectCollision.solid,
		zIndex : 3
	},
	4 : {
		name : "pagar1",
		sprite : [{x:0,y:80,w:85,h:85}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	},
	5 : {
		name : "pagar2",
		sprite : [{x:40,y:80,w:85,h:85}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	},
	6 : {
		name : "pagar3",
		sprite : [{x:80,y:80,w:85,h:85}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	},
	7 : {
		name : "pagar4",
		sprite : [{x:120,y:80,w:85,h:85}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	},
	8 : {
		name : "lampu1",
		sprite : [{x:360,y:80,w:85,h:85}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	},
	9 : {
		name : "lampu2",
		sprite : [{x:360,y:120,w:85,h:85}],
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 3
	}
};
function MapObject(nt)
{
	this.x		= 0;
	this.y		= 0;
	this.type	= nt;
}
MapObject.prototype.placeAt = function(nx, ny)
{
	if(mapTileData.map[toIndex(this.x, this.y)].object==this)
	{
		mapTileData.map[toIndex(this.x, this.y)].object = null;
	}
	
	this.x = nx;
	this.y = ny;
	
	mapTileData.map[toIndex(nx, ny)].object = this;
};


    var floorTypes = {
        solid	: 0,
        path	: 1,
        path2	: 2,
        path3	: 3,
        path4	: 4,
        path5	: 5,
        path6	: 6,
        path7	: 7,
        path8	: 8,
        path9	: 9,
        path10	: 10,
        path11	: 11,
        path12	: 12,
        path13	: 13,
        path14	: 14,
        marmer	: 15,
        grass	: 16,
        grass2	: 17,
        water	: 20,
        ice		: 30,
        conveyorU	: 40,
        conveyorD	: 50,
        conveyorL	: 60,
        conveyorR	: 70
    };
    var tileTypes = {
        0 : { colour:"#685b48", floor:floorTypes.solid, sprite:[{x:240,y:40,w:40,h:40}]	},
        1 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:40,y:0,w:40,h:40}]	},
        2 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:0,y:0,w:40,h:40}]	},
        3 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
        4 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:120,y:0,w:40,h:40}]	},
        5 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:160,y:0,w:40,h:40}]	},
        6 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:200,y:0,w:40,h:40}]	},
        7 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:240,y:0,w:40,h:40}]	},
        8 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:280,y:0,w:40,h:40}]	},
        9 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:320,y:0,w:40,h:40}]	},
        10 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:360,y:0,w:40,h:40}]	},
        11 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:0,y:40,w:40,h:40}]	},
        12 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:40,y:40,w:40,h:40}]	},
        13 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:80,y:40,w:40,h:40}]	},
        14 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:120,y:40,w:40,h:40}]	},
        15 : { colour:"#5aa457", floor:floorTypes.solid,	sprite:[{x:160,y:40,w:40,h:40}]	},
        16 : { colour:"#5aa457", floor:floorTypes.path,	sprite:[{x:200,y:40,w:40,h:40}]	},
        17 : { colour:"#5aa457", floor:floorTypes.solid,	sprite:[{x:200,y:40,w:40,h:40}]	},
        20 : { colour:"#fafafa", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
        30 : { colour:"#286625", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
        40 : { colour:"#678fd9", floor:floorTypes.water,	sprite:[
                {x:160,y:0,w:40,h:40,d:200}, {x:200,y:0,w:40,h:40,d:200},
                {x:160,y:40,w:40,h:40,d:200}, {x:200,y:40,w:40,h:40,d:200},
                {x:160,y:40,w:40,h:40,d:200}, {x:200,y:0,w:40,h:40,d:200}
            ]},
        50 : { colour:"#eeeeff", floor:floorTypes.ice,	sprite:[{x:120,y:120,w:40,h:40}]},
        60 : { colour:"#cccccc", floor:floorTypes.conveyorL,	sprite:[
                {x:0,y:40,w:40,h:40,d:200}, {x:40,y:40,w:40,h:40,d:200},
                {x:80,y:40,w:40,h:40,d:200}, {x:120,y:40,w:40,h:40,d:200}
            ]},
        70 : { colour:"#cccccc", floor:floorTypes.conveyorR,	sprite:[
                {x:120,y:80,w:40,h:40,d:200}, {x:80,y:80,w:40,h:40,d:200},
                {x:40,y:80,w:40,h:40,d:200}, {x:0,y:80,w:40,h:40,d:200}
            ]},
    };

    function Tile(tx, ty, tt)
{
	this.x			= tx;
	this.y			= ty;
	this.type		= tt;
	this.roof		= null;
	this.roofType	= 0;
	this.eventEnter	= null;
	this.object		= null;
	this.itemStack	= null;

}

function TileMap()
{
	this.map	= [];
	this.w		= 0;
	this.h		= 0;
	this.levels	= 4;
}
TileMap.prototype.buildMapFromData = function(d, w, h)
{
	this.w		= w;
	this.h		= h;
	
	if(d.length!=(w*h)) { return false; }
	
	this.map.length	= 0;
	
	for(var y = 0; y < h; y++)
	{
		for(var x = 0; x < w; x++)
		{
			this.map.push( new Tile(x, y, d[((y*w)+x)]) );
		}
	}
	
	return true;
};
    
    var directions = {
        up		: 0,
        right	: 1,
        down	: 2,
        left	: 3
    };
    
    var keysDown = {
        37 : false,
        38 : false,
        39 : false,
        40 : false
    };
    
    var viewport = {
        screen		: [0,0],
        startTile	: [0,0],
        endTile		: [0,0],
        offset		: [64,45],
        update		: function(px, py) {
            this.offset[0] = Math.floor((this.screen[0]/2) - px);
            this.offset[1] = Math.floor((this.screen[1]/2) - py);
    
            var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];
    
            this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
            this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);
    
            if(this.startTile[0] < 0) { this.startTile[0] = 0; }
            if(this.startTile[1] < 0) { this.startTile[1] = 0; }
    
            this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
            this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);
    
            if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
            if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
        }
    };
    
    var player = new Character();
    
    function Character()
    {
        this.tileFrom	= [32,32];
        this.tileTo		= [32,32];
        this.timeMoved	= 0;
        this.dimensions	= [30,30];
        this.position	= [2715,  2090];
    
        this.delayMove	= {};
        this.delayMove[floorTypes.path]			= 800;
        this.delayMove[floorTypes.grass]		= 500;
        this.delayMove[floorTypes.ice]			= 300;
        this.delayMove[floorTypes.conveyorU]	= 200;
        this.delayMove[floorTypes.conveyorD]	= 200;
        this.delayMove[floorTypes.conveyorL]	= 200;
        this.delayMove[floorTypes.conveyorR]	= 200;
    
        this.direction	= directions.up;
        this.sprites = {};
        this.sprites[directions.up]		= [{x:0,y:96,w:32,h:32,d:200},{x:28,y:96,w:32,h:32,d:200},{x:56,y:96,w:32,h:32,d:200}];
        this.sprites[directions.right]	= [{x:0,y:64,w:32,h:32,d:200},{x:28,y:64,w:32,h:32,d:200},{x:56,y:64,w:32,h:32,d:200}];
        this.sprites[directions.down]	= [{x:0,y:0,w:32,h:32,d:200},{x:28,y:0,w:32,h:32,d:200},{x:56,y:0,w:32,h:32,d:200}];
        this.sprites[directions.left]	= [{x:0,y:32,w:32,h:32,d:200},{x:28,y:32,w:32,h:32,d:200},{x:56,y:32,w:32,h:32,d:200}];
        this.inventory = new Inventory(3);
    }
    Character.prototype.placeAt = function(x, y)
    {
        this.tileFrom	= [x,y];
        this.tileFrom	= [x,y];
        this.tileTo		= [x,y];
        this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
            ((tileH*y)+((tileH-this.dimensions[1])/2))];
    };
    Character.prototype.processMovement = function(t)
    {
        if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }
    
        var moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])]].floor];
    
        if((t-this.timeMoved)>=moveSpeed)
        {
            this.placeAt(this.tileTo[0], this.tileTo[1]);
    
            if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined')
            {
                tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
            }
    
            var tileFloor = tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor;
    
            if(tileFloor==floorTypes.ice)
            {
                if(this.canMoveDirection(this.direction))
                {
                    this.moveDirection(this.direction, t);
                }
            }
            else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
            else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
            else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
            else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); }
        }
        else
        {
            this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
            this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);
    
            if(this.tileTo[0] != this.tileFrom[0])
            {
                var diff = (tileW / moveSpeed) * (t-this.timeMoved);
                this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
            }
            if(this.tileTo[1] != this.tileFrom[1])
            {
                diff = (tileH / moveSpeed) * (t-this.timeMoved);
                this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
            }
    
            this.position[0] = Math.round(this.position[0]);
            this.position[1] = Math.round(this.position[1]);
        }
    
        return true;
    }
    Character.prototype.canMoveTo = function(x, y)
    {
        if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
        if(typeof this.delayMove[tileTypes[gameMap[toIndex(x,y)]].floor]=='undefined') { return false; }
        return true;
    };
    Character.prototype.canMoveUp = function() { 
        // var j=0;
        // this.sprites[directions.up]		= [{x:j+=1,y:96,w:32,h:32}];
        return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); 
    };
    Character.prototype.canMoveDown 	= function() { 
        // let text = "";
        // for (let i = 0; i < this.sprites[directions.down].length; i++) {
        //     text += this.sprites[directions.down][i] ;
        // }
        return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); 
    };
    Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
    Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
    Character.prototype.canMoveDirection = function(d) {
        switch(d)
        {
            case directions.up:
                return this.canMoveUp();
            case directions.down:
                return this.canMoveDown();
            case directions.left:
                return this.canMoveLeft();
            default:
                return this.canMoveRight();
        }
    };
    Character.prototype.moveLeft	= function(t) { 
        this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; 
    };
    Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
    Character.prototype.moveUp		= function(t) { 
        
        // charaLoopUp();
        // function charaLoopUp(){     
            
            // var items = [0, 30,  60];
            // function charaLoopUp(){
            // // for(var j=0;j<3;j++){
            //     setTimeout(() => {
            //     var j =0;
            //     this.sprites[directions.up]		= [{x:items[j],y:96,w:32,h:32}];    
            //     j++;                    
            //     if (j < 3) {
            //              charaLoopUp(); 
            //     }      
            //     },1000) 
            // } 
            // charaLoopUp();
            // var i = 0;
            // (function loopIt(i) {
            //   setTimeout(function(){
            //       // your code handling here
            //         this.sprites[directions.up]		= [{x:items[i],y:96,w:32,h:32}];  
            //       console.log(items[i]);
            //       if(i < items.length - 1){  loopIt(i+1)}
            //     },  2000);
            // })(i)
                // var i=[0,30,60];
                // for(var j=0;j<3;j++){
                //     setTimeout(function() {  
                //     this.sprites[directions.up]		= [{x:i[j],y:96,w:32,h:32}];  
                //     },100)
                // }
       
        //     }, 100)
        // }
        // charaLoopUp();

        this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
    Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
    Character.prototype.moveDirection = function(d, t) {
        switch(d)
        {
            case directions.up:
                return this.moveUp(t);
            case directions.down:
                return this.moveDown(t);
            case directions.left:
                return this.moveLeft(t);
            default:
                return this.moveRight(t);
        }
    };
    
    Character.prototype.pickUp = function()
{
	if(this.tileTo[0]!=this.tileFrom[0] ||
		this.tileTo[1]!=this.tileFrom[1])
	{
		return false;
	}
	
	var is = mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack;
	
	if(is!=null)
	{
		var remains = this.inventory.addItems(is.type, is.qty);

		if(remains) { is.qty = remains; }
		else
		{
			mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack = null;
		}
	}
	
	return true;
};


    function toIndex(x, y)
    {
        return((y * mapW) + x);
    }
    
    function getFrame(sprite, duration, time, animated)
    {
        if(!animated) { return sprite[0]; }
        time = time % duration;
    
        var x=0;
        for(x in sprite)
        {
            if(sprite[x].end>=time) { return sprite[x]; }
        }
    }
    
    window.onload = function()
    {
        ctx = document.getElementById('game').getContext("2d");
        requestAnimationFrame(drawGame);
        ctx.font = "bold 10pt sans-serif";
    
        window.addEventListener("keydown", function(e) {
            if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
        });
        window.addEventListener("keyup", function(e) {
            if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
            if(e.keyCode==83)
            {
                currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
            }
        });
    
        viewport.screen = [document.getElementById('game').width,
            document.getElementById('game').height];
    
        tileset = new Image();
        tileset.onerror = function()
        {
            ctx = null;
            alert("Failed loading tileset.");
        };
        tileset.onload = function() { tilesetLoaded = true; };
        tileset.src = tilesetURL;

        
        characterset = new Image();
        characterset.onerror = function()
        {
            ctx = null;
            alert("Failed loading characterset."+skins);
        };
        characterset.onload = function() { charactersetLoaded = true; };
        characterset.src = charactersetURL;
    
        var x=0;
        for(x in tileTypes)
        {
            tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;
    
            if(tileTypes[x].animated)
            {
                var t = 0;
                
                var s=0;
                for(s in tileTypes[x].sprite)
                {
                    tileTypes[x].sprite[s]['start'] = t;
                    t+= tileTypes[x].sprite[s].d;
                    tileTypes[x].sprite[s]['end'] = t;
                }
    
                tileTypes[x]['spriteDuration'] = t;
            }
        }

        mapTileData.buildMapFromData(gameMap, mapW, mapH);
	// mapTileData.addRoofs(roofList);
	mapTileData.map[((2*mapW)+2)].eventEnter = function()
		{ console.log("Entered tile 2,2"); };
	
	var mo1 = new MapObject(2); mo1.placeAt(30, 33);
	var mo2 = new MapObject(2); mo2.placeAt(29, 33);
	var mo3 = new MapObject(2); mo3.placeAt(34, 33);
	var mo4 = new MapObject(2); mo4.placeAt(35, 33);

	var mo5 = new MapObject(8); mo5.placeAt(31, 33);
	var mo6 = new MapObject(9); mo6.placeAt(31, 34);
	var mo7 = new MapObject(8); mo7.placeAt(33, 33);
	var mo8 = new MapObject(9); mo8.placeAt(33, 34);

	var mo9 = new MapObject(4); mo9.placeAt(30, 32);
	var mo10 = new MapObject(4); mo10.placeAt(29, 32);
	var mo11 = new MapObject(4); mo11.placeAt(28, 32);
	var mo12 = new MapObject(4); mo12.laceAt(27, 32);
	
	var mo19 = new MapObject(1); mo19.placeAt(24, 25);
	var mo20 = new MapObject(2); mo20.placeAt(27, 25);
	
	var mo13 = new MapObject(3); mo13.placeAt(25, 21);
	var mo14 = new MapObject(3); mo14.placeAt(23, 22);
	var mo15 = new MapObject(3); mo15.placeAt(21, 23);
	
	var mo16 = new MapObject(3); mo16.placeAt(21, 21);
	var mo17 = new MapObject(3); mo17.placeAt(25, 25);
	var mo18 = new MapObject(3); mo18.placeAt(22, 26);
	
	for(var i = 3; i < 8; i++)
	{
		var ps = new PlacedItemStack(1, 1); ps.placeAt(i, 1);
	}
	for(var i = 3; i < 8; i++)
	{
		var ps = new PlacedItemStack(1, 1); ps.placeAt(3, i);
	}

    };
    
    function drawGame()
    {
        if(ctx==null) { return; }
        if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }
        if(!charactersetLoaded) { requestAnimationFrame(drawGame); return; }
    
        var currentFrameTime = Date.now();
        var timeElapsed = currentFrameTime - lastFrameTime;
        gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

        gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);
    
        var sec = Math.floor(Date.now()/1000);
        if(sec!=currentSecond)
        {
            currentSecond = sec;
            framesLastSecond = frameCount;
            frameCount = 2;
        }
        else { frameCount++; }
    
        if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0)
        {
            if(keysDown[38] && player.canMoveUp())			{ player.moveUp(gameTime); }
            else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(gameTime); }
            else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(gameTime); }
            else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(gameTime); }

        }
        
    
        viewport.update(player.position[0]*1.1*1.06 + (player.dimensions[0]/2),
            player.position[1] + (player.dimensions[1]/2));
    

        ctx.fillStyle = "#9fa7e4";
        ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
    	for(var z = 0; z < mapTileData.levels; z++)
	    {
        for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
        {
            for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
            {
                if(z==0)
                {
                var tile = tileTypes[mapTileData.map[toIndex(x,y)].type];
    
                var sprite = getFrame(tile.sprite, tile.spriteDuration,
                    gameTime, tile.animated);
                ctx.drawImage(tileset,
                    sprite.x, sprite.y, sprite.w, sprite.h,
                    viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
                    tileW, tileH);
                }
                else if(z==1)
                {
                    var is = mapTileData.map[toIndex(x,y)].itemStack;
                    if(is!=null)
                    {
                        var sprite = itemTypes[is.type].sprite;
                        
                        ctx.drawImage(tileset,
                            sprite[0].x, sprite[0].y,
                            sprite[0].w, sprite[0].h,
                            viewport.offset[0] + (x*tileW) + itemTypes[is.type].offset[0],
                            viewport.offset[1] + (y*tileH) + itemTypes[is.type].offset[1],
                            sprite[0].w, sprite[0].h);
                    }
                }
                var o = mapTileData.map[toIndex(x,y)].object;
			if(o!=null && objectTypes[o.type].zIndex==z)
			{
				var ot = objectTypes[o.type];
				 
				ctx.drawImage(tileset,
					ot.sprite[0].x, ot.sprite[0].y,
					ot.sprite[0].w, ot.sprite[0].h,
					viewport.offset[0] + (x*tileW) + ot.offset[0],
					viewport.offset[1] + (y*tileH) + ot.offset[1],
					ot.sprite[0].w, ot.sprite[0].h);
			}
			
		}
	}
	
	}
	
	
        sprite = player.sprites[player.direction];
        // var j =1;
        // ctx.drawImage(characterset,
        //     sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        //     viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        //     player.dimensions[0], player.dimensions[1]);  
        //     ctx.drawImage(characterset,
        //         sprite[1].x, sprite[1].y, sprite[0].w, sprite[0].h,
        //         viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        //         player.dimensions[0], player.dimensions[1]);  

        // var myArray = [1,0,2,1,0,2,1,0,1,0];
        // var charaloop = setTimeout.call(myArray, myArray.myMethod,  2000);

        for(var j=0;j<3;j++){
            ctx.drawImage(characterset,
                sprite[j].x, sprite[j].y, sprite[0].w, sprite[0].h,
                viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
                player.dimensions[0], player.dimensions[1]);
        }

        // function charaLoopUp(){
        //     // for(var j=0;j<3;j++){
        //         setTimeout(()=>{
        //         var j =0;
                   
        //         j++;                    
        //         if (j < 2) {
        //             charaLoopUp(); 
        //         }      
        //         },500) 
        //     } 
        //     charaLoopUp();
        
            
        lastFrameTime = currentFrameTime;
        requestAnimationFrame(drawGame);
    };

    function buttonUp(){
        if(player.canMoveUp())			{ player.moveUp(gameTime); }
    };

    function buttonRight(){
        if(player.canMoveRight())			{ player.moveRight(gameTime); }
    };

    function buttonDown(){
        if(player.canMoveDown())			{ player.moveDown(gameTime); }
    };

    function buttonLeft(){
        if(player.canMoveLeft())			{ player.moveLeft(gameTime); }
    };

    var timer;
    var istrueLeft = false;
    var istrueUp = false;
    var istrueRight = false;
    var istrueDown = false;
    var delay = 200; // how much long u have to hold click in MS
    var delayLoop = 200;

    function holdLeft(e)
    {
        istrueLeft = true;
        timer = setTimeout(function(){ makeChangeLeft();},delay);
        // Incase if you want to prevent Default functionality on mouse down
        if (e.preventDefault) 
        { 
            e.preventDefault();
        } else {
            e.returnValue = false; 
        }
    }
    function makeChangeLeft()
    {
        if(timer)
        clearTimeout(timer);

        if(istrueLeft) 
        {
            var i = 1;
            function myLoopLeft(){
            setTimeout(function() {   
                
                buttonLeft();    
                i++;                    
                if (i < 100 && player.canMoveLeft()) {
                    if(istrueLeft && player.canMoveLeft()){
                        myLoopLeft();   
                    }           
                }                       
              }, delayLoop)
            }
            myLoopLeft();
        }
    }
    function revertLeft()
    {
        istrueLeft =false;
    }



    function holdUp(e)
    {
        istrueUp = true;
        timer = setTimeout(function(){ makeChangeUp();},delay);
        // Incase if you want to prevent Default functionality on mouse down
        if (e.preventDefault) 
        { 
            e.preventDefault();
        } else {
            e.returnValue = false; 
        }
    }
    function makeChangeUp()
    {
        if(timer)
        clearTimeout(timer);

        if(istrueUp) 
        {
            var i = 1;
            function myLoopUp(){
            setTimeout(function() {   
                
                buttonUp();    
                i++;                    
                if (i < 100 && player.canMoveUp()) { 
                    if(istrueUp && player.canMoveUp()){
                        myLoopUp();   
                    }     
                }                       
              }, delayLoop)
            }
            myLoopUp();
        }
    }
    function revertUp()
    {
        istrueUp =false;
    }


    function holdRight(e)
    {
        istrueRight = true;
        timer = setTimeout(function(){ makeChangeRight();},delay);
        // Incase if you want to prevent Default functionality on mouse down
        if (e.preventDefault) 
        { 
            e.preventDefault();
        } else {
            e.returnValue = false; 
        }
    }
    function makeChangeRight()
    {
        if(timer)
        clearTimeout(timer);

        if(istrueRight) 
        {
            var i = 1;
            function myLoopRight(){
            setTimeout(function() {   
                
                buttonRight();    
                i++;                    
                if (i < 100 && player.canMoveRight()) { 
                    if(istrueRight && player.canMoveRight()){
                        myLoopRight();   
                    }     
                }                       
              }, delayLoop)
            }
            myLoopRight();
        }
    }
    function revertRight()
    {
        istrueRight =false;
    }


    function holdDown(e)
    {
        istrueDown = true;
        timer = setTimeout(function(){ makeChangeDown();},delay);
        // Incase if you want to prevent Default functionality on mouse down
        if (e.preventDefault) 
        { 
            e.preventDefault();
        } else {
            e.returnValue = false; 
        }
    }
    function makeChangeDown()
    {
        if(timer)
        clearTimeout(timer);

        if(istrueDown) 
        {
            var i = 1;
            function myLoopDown(){
            setTimeout(function() {   
                
                buttonDown();    
                i++;                    
                if (i < 100 && player.canMoveDown()) { 
                    if(istrueDown && player.canMoveDown()){
                        myLoopDown();   
                    }     
                }                       
              }, delayLoop)
            }
            myLoopDown();
        }
    }
    function revertDown()
    {
        istrueDown =false;
    }


    // function dblClickLeft()
    // {
    //     if(player.canMoveLeft())			{ player.moveLeft(gameTime); }
    // }
    // function dblClickUp()
    // {
    //     if(player.canMoveUp())			{ player.moveUp(gameTime); }
    // }
    // function dblClickRight()
    // {
    //     if(player.canMoveRight())			{ player.moveRight(gameTime); }
    // }
    // function dblClickDown()
    // {
    //     if(player.canMoveDown())			{ player.moveDown(gameTime); }
    // }
    

    return (
        <div className="main-wrapper"><div className="containerStick">
            <div className="colStart">
                <div className="buttonStick" onMouseDown={holdLeft} onMouseUp={revertLeft}> 
                    <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" size="2x" />
                </div>              
            </div>
            <div className="colMiddle">
                <div className="buttonStick"   onMouseDown={holdUp} onMouseUp={revertUp}>
                    <FontAwesomeIcon icon={faArrowUp} className="iconArrow" size="2x" />
                </div>
                <div className="buttonStick"   onMouseDown={holdDown} onMouseUp={revertDown}>
                    <FontAwesomeIcon icon={faArrowDown} className="iconArrow" size="2x" />
                 </div>
            </div>
            <div className="colEnd">
                <div className="buttonStick"   onMouseDown={holdRight} onMouseUp={revertRight}>
                    <FontAwesomeIcon icon={faArrowRight} className="iconArrow" size="2x" />
                 </div>
            </div>       
        </div>
            <canvas id="game" className="demo" width="2560" height="800"></canvas>
        </div>
    );
}