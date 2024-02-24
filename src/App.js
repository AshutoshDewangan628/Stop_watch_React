import './App.css'
import {useRef, useState} from "react";

function App() {

  let min=0;
  let sec=0;
  let hr=0;
  let timerid=useRef(null);

  let display=`0${hr}:0${min}:0${sec}`
  const [val,setVal]=useState(display)

  const handleBtn=(event)=>{
    if(event.target.name==='start'){
        timerid.current=setInterval(()=>{
        sec++;
        if(sec>58){
          sec=0;
          min++;
        }
        if(min>58){
          min=0;
          hr++;
        }
        setVal(`${hr<10 ? `0${hr}`:hr}:${min<10 ? `0${min}`:min}:${sec<10 ? `0${sec}`:sec}`)
      },1000)
    }

    if(event.target.name==='stop'){
      clearInterval(timerid.current)
      
    }
    if(event.target.name==='end'){
       clearInterval(timerid.current)
       setVal(`00:00:00`)
    }

  }
  
  return (
    <div className="App">
      <h1>Stop Watch Timer</h1>
      <p>{val}</p>
      <div className='btn'>
        <button name='start' className='start-btn' onClick={handleBtn}>Start</button>
        <button name='stop' className='stop-btn' onClick={handleBtn}>Stop</button>
        <button name='end' className='end-btn' onClick={handleBtn}>End</button>
      </div>
    </div>
  );
}

export default App;
