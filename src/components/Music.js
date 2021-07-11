import React, { useState, useEffect } from "react";
// import url from '../audio/music.mp3';
import '../css/ButtonHelper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCamera, faMap, faVolumeMute, faVolumeUp,  } from '@fortawesome/free-solid-svg-icons';

const useAudio = playornot => {
  const [audio] = useState(new Audio('./audio/music.mp3'));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.removeEventListener('ended', () => audio.play());
    };
  }, []);

  return [playing, toggle];
};



const Music = playornot  => {
  
  // console.log(playornot.setplay);
  const [playing, toggle] = useAudio(playornot);

  return (
    <div>    
    {playing ? <div className="buttonHelper" onClick={toggle}>
      
         <FontAwesomeIcon icon={faVolumeUp} className="icon" size="2x" /> 
         
    </div>:
    <div className="buttonHelper ahashakeheartache" onClick={toggle}>

     <FontAwesomeIcon icon={faVolumeMute} className="icon" size="2x" />
    </div>}
    </div>
  );
};

export default Music;