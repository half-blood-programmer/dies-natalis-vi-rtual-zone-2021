import '../css/ButtonHelper.css';
import '../css/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCamera, faMap, faVolumeUp,  } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import Music from './Music';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import "firebase/database";
import db from './map/config';

export default function ButtonHelper () {    

var docRefGetMap = db.collection("content").doc("map");
var getMap;

docRefGetMap.get().then(documentSnapshot => {
    if (documentSnapshot.exists) {
        getMap = ""+documentSnapshot.data().html+"";
        console.log(getMap);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

function popupMap(){
  Swal.fire({
    footer :'',
    showCloseButton: true,
    showConfirmButton:false,
    width: "600px",
    padding: "80px 0 60px 0",
    html:''+getMap+'',
    background:"url('./background-pop-up.png",
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
    }
  })
}

function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}

function screenshoot() {
  playSound();
  html2canvas(document.body).then(function(canvas) {
    const base64image = canvas.toDataURL("image/png");
    window.location.href = base64image;
    console.log(base64image);
    
    Swal.fire({
          titleText:"Screenshoot Challange",
          footer :'',
          showCloseButton: true,
          showConfirmButton:false,
          width: "600px",
          height: "800px",
          padding: "50px 20px 0 20px",
          html: '<img src="'+base64image+'" alt="Red dot" style="width:560px;height:auto;margin:20px 0 20px 0;"/><br> <p style="padding: 0 20px 0 20px">Download hasil screenshoot <a href="'+base64image+'" download="Dienatalis VIrtual Zone">di sini</a> dan bagikan ke insta-story kamu, jangan lupa tag akun @diesnatpknstan ya!</p>',
          footer:'',
          background:"url('./background-pop-up.png",
          className: "swal-popup",
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
            });    
});

}

  return(
    <div className="containerHelper">
    <audio id="audio" src="audio/ss-sound.mp3" autoPlay={false} ></audio>

    <Music/>
    
    <div className="buttonHelper" onClick={popupMap}>
      <FontAwesomeIcon icon={faMap} className="icon" size="2x" />
    </div>
    <div className="buttonHelper">
      <FontAwesomeIcon icon={faCamera} className="icon" size="2x" onClick={screenshoot} />
    </div>
    </div>
  );
}
