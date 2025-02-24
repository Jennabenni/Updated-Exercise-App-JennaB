//references previous assignments
/** https://github.com/Jennabenni/React-Menu-App-JennaB*/

//import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
//UseState is a hook apparently
//where you import componente, like menu app in last lab
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
//I need these to make the buttons work
import RunningExercise from "./components/RunningExercise";

const exerciseData = [
  {
    "appName": "Health Help",
    //I need to add this heading somewhere
    "exerciseName": [
      {
        "exerciseItem": "Pushups",
        "type": "repetition"
        //this is crucial on how to direct the button
      },{
        "exerciseItem": "Running",
        "type": "running"
      },{
        "exerciseItem": "Planks",
         "type": "duration"
      }
    ]
  }
];


function Button({exercise, onClick}){
  return(
    <button onClick={()=> onClick(exercise)}>
    {exercise.exerciseItem}
    </button>
    //so exercise could be named anything, but we attach it with .exerciseItem
    //to show that exercise = the exercise item?

    //displays name on button
    //exercise is a random word, can be anything, but it represents one exercise
    //this isn't a specific one, but maybe it acts as a loop and covers all of them

    //exerciseItem has the name itself, and it gets attached onto the individual
    //exercise.  This makes it so the names aren't all smoshed together


    /*Like JS, this is a function defined outside of where the code is printing */
  );
}

//this prints to page
function App() {
  const [currentExercise, setCurrentExercise] = useState(null);
//so useState creates both current and setCurrent





  function handleButtonClick(exercise) {
    setCurrentExercise(exercise);
  }

  return (
    //this is the app component
//for new things to be added, {} then the tag

//not current exercise, and make heading with app name
    <div className="App">
    {!currentExercise && <h1>Health Help</h1>}

      {currentExercise ? (
        <>


          {currentExercise.type === "duration" ? (
            <DurationExercise name={currentExercise.exerciseItem}/>
            //navigates to duration and rep respectively
          ) : currentExercise.type === "repetition" ? (
            <RepetitionExercise name={currentExercise.exerciseItem} />

          ) : (
            <RunningExercise name={currentExercise.exerciseItem} />

          )
          //i may have to add another ternary operator

          }
        </>
      ) : (
        //this is the loop!!
        /* exerciseData[0] starts at first name
        exerciseName.map refers to overarchinb thing that contains the names, looping through it

        props taken in are exercise and index (?)

        key gives a unique element to each item in the list apparently

        that makes each button separate, so it gives each a unique number, gives exercise name, then runs the button function when clicked


        */
        <nav>

          {exerciseData[0].exerciseName.map((exercise, index) => (
            <Button key={index} exercise={exercise} onClick={handleButtonClick} />
          ))}
        </nav>
      )}
    </div>
  );
}

export default App;




//How do I make multiple pages in React??


/*</button>function App() {
  return (
    <div className="App">
    </div>
  );
};
*/

//export default App;
