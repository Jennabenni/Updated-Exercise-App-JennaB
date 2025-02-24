/*
references
https://react.dev/reference/react/hooks
//
//
// https://www.w3schools.com/react/react_hooks.asp*/




/* Maintain an internal counter and include a button that increments the current value.
Start at 0

needs to display exercise at top, it says in component, must pass in the name prop*/



//I understand and shall now explain for myself

import React, {useState} from "react";
//useState is a hook, something already created

function RepetitionExercise({name}){
  //runs name prop


  //const usually makes arrays or variables
    const [lapCount, setLapCount] = useState(0);
    //lapCount is a name, setLapCount is a FUNCTION
    //sets the lap counter at zero

    //this will make it bigger, with button
    const handleIncrement = () => {
      //prevCount is a parameter, is previous state value
      //provided by REACT when you use an UPDATER FUNCTION (useState) with
      //setLapCount

      //setLapCount is a function
      setLapCount((prevCount) => prevCount + 1);
    };

    //reset button, sets value to zero
    const handleReset = () => {
        setLapCount(0);
      };

      //format!
    return(
        <div>
        <h2>{name}</h2>
        <h3>Reps: {lapCount}</h3>
        <button onClick={handleIncrement}>Complete rep</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;