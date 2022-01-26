import { Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserSelectionForm from './components/UserSelectionForm';
import './styles/sass/App.scss';


function App() {  

  return (
    <div>
      <header>
        <h1>RoboTrivia</h1>
      </header>
      {/* <UserSelectionForm
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
      <Quiz quizQuestions={quizQuestions} /> */}
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/welcome' element={<UserSelectionForm />}/>
      </Routes>
    </div>
  );
}

export default App;

// npm install
// axios




// pseudocode for firebase scoreboard
  // 1. get the player objects from database
  // 2. set player objects pulled, to firebaseHighscore state variable
  // 3. compare firebaseHighscore[x].score with player objects scores of current sesssion
  // 4. find player objects with three(or 10 potentially) highest scores and push those player objects upto firebase
  // display session's highest score.
  // display firebase highscre as all time highecore.


// things still needed ti be functional
  // way to grab name and avatart url and set to playerObj
  // way to play again
  // display scoreboard
  // fix html code for "" (regEx)
  // styling
  // multiplayer
  



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
