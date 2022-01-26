import { useState } from "react";


const Quiz = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  // let currentPlayerScore = 0; 
  // const [ isCorrect, setIsCorrect ] = useState(false);
  

  const handleAnswerClick = (event, value) => {
    const userAnswer = event.target.value;
    if (userAnswer === props.quizQuestions[currentQuestion].correct_answer){
      console.log("Correct!");
      setCurrentScore(currentScore + 100);
      // setIsCorrect(true);  
    } else {
      console.log("Nope!");
      // setIsCorrect(false);
    }

    if (currentQuestion < props.quizQuestions.length - 1 ){
      setCurrentQuestion(currentQuestion + 1)

    } else {
      alert("end of quiz");
    }
    
    // console.log(currentQuestion);
  }

    return (
      <div>
        {props.quizQuestions.length !== 0  ?
          <>
            <h2>quiz here</h2>
            
            <p>Question: {props.quizQuestions[currentQuestion].question}</p>
            {
              props.quizQuestions[currentQuestion].answerButtons.map((answerItem, index)=>{
                return(
                  <button
                    value={answerItem.name}
                    onClick={handleAnswerClick}
                    key={index}
                    className={answerItem.isCorrect ? "correctAnswer" : "incorrectAnswer" }
                  >
                    {answerItem.name}
                  </button>
                )
              })
            }
            <p>{currentScore}</p>
           
            
          </>
        :
        null}
      </div>
    );
}

export default Quiz;



// props.quizQuestions[currentQuestion].incorrect_answers
// {style it red} on button click
// props.quizQuestions[currentQuestion].correct_answer
// {style it green} on button click