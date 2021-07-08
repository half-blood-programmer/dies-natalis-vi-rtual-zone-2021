
import React from 'react';
import Actor from '../actor';
import useKeyPress from '../hooks/use-key-press';
import useWalk from '../hooks/use-walk';

export default function Player(){
  const { dir, step, walk, position } = useWalk(3)

  const data = {
    h:32,
    w:32,
  }
  
  useKeyPress((e) =>{
    walk(e.key.replace("Arrow", "").toLowerCase());
    // const dir = e.key.replace("Arrow", "").toLowerCase()
    // walk(dir);
    e.preventDefault();
  })

  return <Actor 
            sprite={`sprites/skins/f1.png`} 
            data={data} step={step} 
            dir={dir}
            position={position}
        />
}