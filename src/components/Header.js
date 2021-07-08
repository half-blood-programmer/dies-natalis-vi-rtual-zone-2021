import '../css/Header.css';
import React from 'react';
import Logo from '../img/logodnfinal.png';



function Header(){
    return (
        <header className="App-header">
            <img src={Logo} alt='' className="logo"></img>
            <div className="title">
                Dies Natalis  <br></br>
                VIrtual Zone
            </div>
        </header>
    );
  }
  
  export default Header;