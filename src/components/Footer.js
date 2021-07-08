import '../css/Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faLine, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return (
        <div className="containerFooter">
            <div className="copyright">
                <b><FontAwesomeIcon icon={faCopyright}/> PBS Dies Natalis VI </b>
            </div>
            <div className="sosmed">
            <a href="https://line.me/ti/p/diesnatalispknstan" target="_blank">
                <FontAwesomeIcon icon={faLine}  className="icoFooter"  />
            </a>
            <a href="https://www.instagram.com/diesnatalispknstan/?hl=id" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare}  className="icoFooter"  />
            </a>
            <a href="https://twitter.com/diesnatpknstan" target="_blank">
                <FontAwesomeIcon icon={faTwitter}  className="icoFooter"  />
            </a>
            <a href="https://www.youtube.com/channel/UCV43BLhfPgD8tJDQ5QdWjqA" target="_blank">
                <FontAwesomeIcon icon={faYoutube}  className="icoFooter"  />
            </a>
            </div>
        </div>
    );
  }
  
export default Footer;