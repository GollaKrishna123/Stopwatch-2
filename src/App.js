import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const startHandler = () => {
    setRunning(true);
  };

  const stopHandler = () => {
    setRunning(false);
  };

  const resetHandler = () => {
    setRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  if (seconds > 59) {
    setSeconds(0);
    setMinutes(minutes + 1);
  }

  if (minutes > 59) {
    setMinutes(0);
    setHours(hours + 1);
  }

  return (
    <div className="timer-container">
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            paddingBottom: "20px",
          }}
        >
          StopWatch
        </h1>
        <div className="timer-shadow">
          <h2 className="timer">Timer</h2>
          <h1 className="time">{`${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes
          }:${seconds < 10 ? `0${seconds}` : seconds}`}</h1>
          <button onClick={startHandler} className="start-btn">
            Start
          </button>
          <button onClick={stopHandler} className="stop-btn">
            Stop
          </button>
          <button onClick={resetHandler} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
