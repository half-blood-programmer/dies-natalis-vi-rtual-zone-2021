import React, { Component, useEffect, useState } from "react";
import '../css/Welcome.css';
import Modal from './Modal';
import TiledMap from "./map/Grid";
import Music from "./Music";

function handleChara(){
  const chara = "boy.png"; 
  console.log(chara); 
}

class Welcome extends Component  {
    
    constructor(){
        super();
        this.state = {
          show: true
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
        <Music setplay="true"/>
        var skin1 = "f1.png";
        handleChara();
      };

    render() {
        return (
          <main>
            {/* <h1>React Modal</h1> */}
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
            </Modal>
            <button type="button" className="button-welc" onClick={this.showModal}>
              {/* Open */}
            </button>
          </main>
        );
      }
}

export default Welcome;