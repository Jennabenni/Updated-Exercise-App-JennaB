/*
https://react.dev/reference/react/hooks
- Use State? Remebers things like user input

*/
import React, {useState, useEffect} from "react";


function RunningExercise({name}){
//similar to duration, except it logs the number

const [time, setTime] = useState(0);
//sets time, starts at zero

const [isRunning, setIsRunning] = useState(false);
//checks if timer is running

//NEW THING
const [laps, setLaps] = useState([]);
//these are variables




useEffect(()=>{

    let timer;
    //set timer as a variable thing

    if(isRunning){
        timer = setInterval(() =>{
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    }
return ()=> clearInterval(timer);

}, [isRunning]);


const formatTime = (time) =>{
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

    return `${minutes}:${seconds}`;

};

const handleStart = () => {
    setIsRunning(true);
  };


  const handleLap = () =>{
    //I need to log the time that the user laps at
setLaps([...laps, time]);
//is it that easy????

  }

  //sets boolean to flase
  const handleStop = () => {
    setIsRunning(false);
  };
//sets it to false, then resets the number
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    //reset laps entirely
  };

  //this I understand, this returns how it looks
    return(
        <div>
        <h2>{name}</h2>

        <h3>{formatTime(time)}</h3>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>

<div>
    <h3>Laps</h3>
    <ul>
        {laps.map((lap, index) => (
            <li key={index}>{formatTime(lap)}</li>
        ))}
    </ul>
</div>



        </div>
        //I need a section for the code to be placed there (lap)
    );
}


export default RunningExercise;