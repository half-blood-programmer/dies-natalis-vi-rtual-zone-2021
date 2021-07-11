import logo from './logo.svg';
import './App.css';
import React from 'react';
import SideNav from './components/SideNav';
import Header from './components/Header';
import ButtonHelper from './components/ButtonHelper';
import Footer from './components/Footer';
import Character from './components/Character';
import Sprite from './components/sprite';
import Actor from './components/actor';
import Player from './components/player';
import OffCanvas from './components/performance/offcanvas';
import LayerMap from './components/square/layers';
import TiledMap from './components/map/Grid';
import Stick from './components/Stick';
import Music from './components/Music';
import CekOrientation from './components/Orientation';
import Welcome from './components/Welcome';


function App() {
  
  return (
    <div className="zone-container">
      <CekOrientation/>
      {/* <TiledMap />
      <ButtonHelper/>
      <Header/>
      <Footer/>   */}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
