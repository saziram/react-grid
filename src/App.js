import './App.css';
import { times } from 'lodash';
import React, { useState } from 'react';

function App() {
  
  const rows = 5;
  const columns = 6; 
  const [isClicked, setIsClicked] = useState(false);
  const [coords, setCoords] = useState({
    startAt: '',
    endAt: ''
  }); 
  const onClickHandle = e => { 
    setIsClicked(e.type === 'pointerdown');
    if(e.type === 'pointerdown'){
      setCoords({...coords, startAt: e.target.id});
    }else{
      clearStyles();
    }

  };

  const clearStyles = () => {
    const box = document.getElementsByClassName("box");
    [].forEach.call(box, (element) => {
      element.style.backgroundColor = '#fff';
    }); 
  }

  const onPointerMoveHandle = e => {
    if(isClicked){
      setCoords({...coords, endAt: e.target.id});
      const startAt = coords.startAt.split("-");
      const endAt = coords.endAt.split("-");
      clearStyles();
      startAt.forEach((element, index) => {
        if(element > endAt[index]){
          startAt[index] = endAt[index];
          endAt[index] = element;
        }
      });
      for(let i = startAt[0]; i <= endAt[0]; i++){
        for(let j = startAt[1]; j <= endAt[1]; j++){
          document.getElementById(`${i}-${j}`).style.backgroundColor = '#ddd';
        }   
      }      
    }
  };

  return (
    <div className="App">
      <div id="root" className="root">
      {
        times( rows, r => <div key={r} className="row">
          { times( columns, c => <div key={`${r}-${c}`} id={`${r+1}-${c+1}`} className="box" onPointerDown={onClickHandle} onPointerUp={onClickHandle} onPointerEnter={onPointerMoveHandle} ></div>) }
        </div>  
        ) 
      }
      </div>    
    </div>
  );
}

export default App;
