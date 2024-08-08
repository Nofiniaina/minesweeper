import { useState } from 'react'
import Timer from './component/Timer';
import Cell from './component/Cell';
import './App.css'
import Board from './component/Board';

function App() {
  const [timer, setTimer] = useState({
    start: false,
    stop: false,
    reset: false,
  });


  const handleStart = () => {
    setTimer({ start: true, stop: false, reset: false});
  }
  const handleStop = () => {
    setTimer({ start: false ,stop: true, reset: false});
  }
  const handleReset = () => {
    setTimer({ start: false, stop: false, reset: true});
  }

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
      <Timer {...timer}/>
      <Board level='BEGINNER'/>
    </>
  )
}

export default App
