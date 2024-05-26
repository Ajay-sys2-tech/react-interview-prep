import React, { useState } from 'react';

const Stopwatch = () => {
    const [ min, setMin ] = useState(0);
    const [ sec, setSec ] = useState(0);
    const [ stop, setStop ] = useState(true)

    const start = () => {
        let time = 0;
        setStop(false);
        // while(time < 100){
            // time++;
            console.log("started", sec);
            setInterval(() => {
                setSec(sec + 1);
               start();
                if (sec === 60) {
                    setSec(0);
                    setMin(min + 1);
                }
        }, 1000);
    // }
    }

    const pause = () => {
        console.log("paused");
        setStop(true);
    }

    const reset = () => {
        console.log("reset");
        setMin(0);
        setSec(0);
    }
  return (
    <div className="container">
      <h1>this is a stopwatch</h1>
      <div className="countdown">
       <span>{min}</span> : <span>{sec}</span> 
      </div>
      <div className="button-grp">
          <button onClick={start}>Start</button>
          <button onClick={pause}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
    </div>
  );
};

export default Stopwatch;
