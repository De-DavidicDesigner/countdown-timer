import { useState, useEffect } from 'react'

import Header from './components/Header'
import Counter from './components/Counter'
import Timer from './components/Timer'

function App() {
  
  const [timer, setTimer] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let countdownInterval;
    
    if (isRunning && time > 0) {
      countdownInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      clearInterval(countdownInterval);
      setIsRunning(false);
      // alert("Time's up!");
    }
    
    return () => clearInterval(countdownInterval);
  }, [time, isRunning]);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    const totalSeconds = parseInt(timer.hour) * 3600 + parseInt(timer.minute) * 60 + parseInt(timer.second);
    setTime(totalSeconds);
    setIsRunning(true);
  };
  
  function handleTimer(inputIdentifier, newValue) {
    setTimer(preValue => {
      return {
        ...preValue,
        [inputIdentifier]: +newValue,
      }
    })
  }

  function handleRestart(identifier, newValue = 0) {
    setTimer(preValue => {
      return {
        ...preValue,
        [identifier]: newValue,
      }
    });
    setTime(0);
    setIsRunning(false);
  }

  function handleReset(identifier, newValue = 0) {
    setTimer(preValue => {
      return {
        ...preValue,
        [identifier]: newValue,
      }
    });
    setTime(0);
    setIsRunning(false);
  }

  return (
    <>
      {!isRunning ? 
        <>
          <Header />
          <Counter 
            timer={timer} 
            onChange={handleTimer}
            onClick={startTimer}
          /> 
        </>:
        <Timer 
          isRunning={isRunning}
          onClick={handleRestart}
          format={formatTime}
        />
      }
    </>
  )
}

export default App
