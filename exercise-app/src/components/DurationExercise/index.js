/*
references

https://webcourses.ucf.edu/courses/1478936/pages/video-useeffect-with-timer-14-43?module_item_id=19288952
- useEffect with timer

https://react.dev/reference/react/hooks
*/




/* Must increase in value when the start button is pressed
Must reset to a reasonable value (00:00 or 00:00:00 are acceptable)
All buttons may be displayed, or buttons may be displayed based on state
You must pad your digits so that single digits have a "0", e.g. 01 instead of 1.*/

import React, {useState, useEffect} from "react";
//useState and useEffect are both hooks.  They come with
//certain features, but it's best to look up the React website




/*I have studied the ways of react and now I understand */
function DurationExercise({name}){
//runs name prop, as instructions said

//time, not sure if name matters, but it is changed by the FUNCTION
//setTime
//hook useState is here, it sets the state.  Here it's a number, which is zero
const [time, setTime] = useState(0)

//this is similar to the previous const, except it uses a boolean instead
//of a number.  This checks if the timer is running
const [isRunning, setIsRunning] = useState(false);
//we start it off with false, since we don't want it running when we open it.


//hook, useEffect
//synchronizes component with external system (according to VS code)
useEffect(() => {

    let timer;
    //defining timer, but isn't anything yet

    //if timer isRunning (true)
    if (isRunning) {
      //this sets the interval to increment by 1,
      //1000 miliseconds is 1 sec, we're increasing by seconds

    //the use effect could relate to how fast miliseconds move
    //even if I didn't code that to show
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);

        //1000 is miliseconds, aka one second
      }, 1000);
    }
    //this clears the timer, and doesn't leave it running?
    return () => clearInterval(timer);
    //this changes false to true
  }, [isRunning]);


  //this starts with the format and the button functions

  //this formats how the time LOOKS
  const formatTime = (time) => {
    //time prop
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    /*minutes, math.floor returns greatest integer less than or equal
    to numeric argument
    padStart is the format! it makes it 01 instead of 1
    the 2 is the two numbers, 00, and the "0" sets them both as zero

    this divides the seconds by 60 to calculate the minutes

    */
    const seconds = String(time % 60).padStart(2, "0");

/*Same thing as previous, but  % gives the remainder right?

i think the 60 also stops it from going over, so we wont have 99:99 or something similar

*/

    return `${minutes}:${seconds}`;
    //this returns the format




  };


/*Start button, set boolean to true */
  const handleStart = () => {
    setIsRunning(true);
  };

  //sets boolean to flase
  const handleStop = () => {
    setIsRunning(false);
  };
//sets it to false, then resets the number
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  //this I understand, this returns how it looks
    return(
        <div>
        <h2>{name}</h2>

        <h3>{formatTime(time)}</h3>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default DurationExercise;