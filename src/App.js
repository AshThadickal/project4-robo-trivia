// import UserSelectionForm from './components/UserSelectionForm.js';
// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerNames from './components/PlayerNames.js';
// import Quiz from './components/Quiz.js';
import UserSelectionForm from './components/UserSelectionForm.js';
import Quiz from './components/Quiz.js';
// import { Routes, Route, Link} from 'react-router-dom';
import './styles/sass/App.scss';

// firebase import 
import firebase from './firebase.js';
import { getDatabase, ref, push, onValue } from 'firebase/database';
  

function App() {
  // firebase data - for userObj
  const [userObj, setUserObj] = useState({});
  const [newUserObj, setnewUserObj] = useState([]);

  // button to activate it
  // const [scoreButton, setScoreButton] = useState(false);

  useEffect(() => {
    const database = getDatabase(firebase);
    // reference database
    const dbRef = ref(database);

    // add an event listener to call data 'response'
    onValue(dbRef, (response) => {
      // storing new state
      const newState = [];
      // storing in variable
      const data = response.val();

      // for in loop to access data property
      for (let player in data) {
        newState.push(data[player]);
      }
      // then setState
      setUserObj(newState);
    });
  }, []);

  // firebase handler
  const scoreButtonHandler = () => {
    setnewUserObj(  
    [{ playerD: "Imitiaz", score: 32 },
    { playerE: "Joey", score: 62 },
    { playerF: "Laura", score: 80 },]
    );
  };  

  // useEffect to push
  useEffect(() => {
    const database = getDatabase(firebase);
    // reference database
    const dbRef = ref(database);

    push(dbRef, newUserObj); 
  }, [newUserObj])

  // set - updating data 
  // note use a setting function

  // pseudocode for firebase scoreboard
  // 1. get the player objects from database
  // turn player objects into array and push up 



  // quiz variables
  const difficultyArr = ["easy", "medium", "hard"];
  // api call for category
  const [categoryArr, setCategoryArr] = useState([]);
  // useStates from form component - for second api call
  // const [numOfPlayers, setNumOfPlayers] = useState(0);
  const [userCategory, setUserCategory] = useState("");
  const [userDifficulty, setUserDifficulty] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  
  // setting state with quiz questions
  const [quizQuestions, setQuizQuestions] = useState([]); 

  // const handlePlayerNumber = (event) => {
  //   setNumOfPlayers(event.target.value);
  // };

  const handleCategoryChoice = (event) => {
    setUserCategory(event.target.value);
  };

  const handleDifficultyChoice = (event) => {
    setUserDifficulty(event.target.value);
    // console.log(userDifficulty);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitButton(!submitButton);
  };



  const randomizer = () => { 
    return Math.floor(Math.random() * 4); 
  };

  // useEffect for axios - put this info in dropdown
  // associate id and name of category
  useEffect(() => {
    axios({
      url: "https://opentdb.com/api_category.php",
      method: "GET",
      responseType: "json",
      params: {},
    })
      .then((res) => {
        setCategoryArr(res.data.trivia_categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // console.log("app is running");
    if (userCategory !== "") {
      axios({
        url: "https://opentdb.com/api.php",
        method: "GET",
        responseType: "json",
        params: {
          amount: 10,
          category: userCategory,
          type: "multiple",
          difficulty: userDifficulty,
        },
      })
        .then((res) => {
          // questions array
          const returnedObject = res.data.results;
          const combinedAnswers = (quizQuestions)=>{
            
            const combinedAnswerArr = [...quizQuestions]
            combinedAnswerArr.forEach((quizObject)=>{
              quizObject.allAnswers = quizObject.incorrect_answers.splice(randomizer(), 0, quizObject.correct_answer)
            })
            setQuizQuestions(combinedAnswerArr);
            console.log(quizQuestions);
          }
          
          combinedAnswers(returnedObject);
          // returnedObject.forEach()
          // setQuizQuestions(returnedObject);
          // code for questions!


          // const resturnedObject = res.data.results


          // const combinedAnswers = (triviaQuestion) => {
          //   const responseWithCombined = [...triviaQuestion];
          //   // Need to figure out how to shuffle the answers
          //   responseWithCombined.forEach((triviaObject) => {
          //     triviaObject.allAnswers = [...triviaObject.incorrect_answers, triviaObject.correct_answer]
          //   })
          //   setQuizQuestions(responseWithCombined);
          // }
          // combinedAnswers(resturnedObject);
          // console.log(quizQuestions)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [submitButton]);

  return (
    <div>
      <h1>RoboTrivia</h1>
      <UserSelectionForm
        submitHandler={submitHandler}
        handleCategoryChoice={handleCategoryChoice}
        userCategory={userCategory}
        handleDifficultyChoice={handleDifficultyChoice}
        userDifficulty={userDifficulty}
        categoryArr={categoryArr}
        difficultyArr={difficultyArr}
        submitButton={submitButton}
      />

      <PlayerNames />
      <Quiz quizQuestions={quizQuestions} />
      <button onClick={scoreButtonHandler}>Get scoreboard</button>
    </div>
  );
}

export default App;

// npm install
// axios


// pseudo code
// ===========Landing page============
// Landing page with number of players
    // - need a form with a drop down for choosing number of players
    // - start button
    // populate drop down menu with an intial API call for categories and difficulties
    // question type will be fixed to multiple choice


// ===========Player Info============ 
// page to collect user name and show
    // This depends on the num-player chosen from loading page
    // this process will populate name and robot part of our data structure
    // button to proceed to next stage 

  
// ===========quiz section============ (4 routes)
    // a screen display for a start of a player
    // questions will be displayed
    // players will take turn answering 10 questions.
        // - animation for each correct/in-correct answer
        // - upon completion a screen indicationg completion + start of next player
        // - update score in user object inside players array
    

// ===========score board============
    // after all players complete their turns, display score board.
    // display highest score among the 4 players. (animation?)
    // retrive highscore from firebase db and show a aomparison to current sessions higest score.
    // if the sessions' highest score is above db highscore set new highscore to db
    // include a play again button to go back to first stage.
        // - store sessions user data in to db for stretch goal





    // let handleInput = onchange( ()=> {
    //   return (
    //     // what user typed
    //   )
    // });



  // sample data structure
    // let playerArray = [
    //   {
    //     name: xxx,
    //     robot: xxx,
    //     categoryScore: xxx,
    //     score: xxx
    //   },

    //   {
    //     name: xxx,
    //     robot: xxx,
    //     categoryScore: xxx,
    //     score: xxx
    //   },

    //   {
    //     name: xxx,
    //     robot: xxx,
    //     categoryScore: xxx,
    //     score: xxx
    //   },

    //   {
    //     name: xxx,
    //     robot: xxx,
    //     categoryScore: xxx,
    //     score: xxx
    //   },
    // ]

    // let variable = useInput;
    // `https://robohash.org/${variable}.png`
