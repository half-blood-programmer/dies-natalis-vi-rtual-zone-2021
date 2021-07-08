import '../css/ButtonHelper.css';
import '../css/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCamera, faMap  } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import Music from './Music';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';

export default function ButtonHelper () {
function popupMap(){
  Swal.fire({
    titleText:"Map of DN VI World",
    footer :'',
    showCloseButton: true,
    showConfirmButton:false,
    width: "600px",
    height: "800px",
    padding: "80px",
    background:"url('./background-pop-up.png",
    className: "swal-popup",
    imageUrl: './map.jpg',
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
          background:"url('./background-pop-up.png",
          className: "swal-popup",
          // imageHeight: 00,
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
            });    // document.body.appendChild(canvas);
            // return canvas2image.convertToPNG(canvasObj, 400, 400);
});
//   html2canvas(document.querySelector('.containerHelper'),{
//     onrendered: function (canvas) {                     
//       return canvas2image.convertToPNG(canvas, 400, 400);            
// }
  // })
//   html2canvas(document.querySelector('.specific'), {
//       onrendered: function(canvas) {
//           // document.body.appendChild(canvas);
//         return Canvas2Image.saveAsPNG(canvas);
//       }
//   });
// }
}

  return(
    <div className="containerHelper">
    <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>

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
