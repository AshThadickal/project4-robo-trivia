// firebase import
import firebase from "./../firebase";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserScores = (props) => {
  // firebase data - for userObj
  const [userObj, setUserObj] = useState([]);
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
      setUserObj(newState[0]);
      console.log(newState[0]);
      // console.log(newState[0]);
    });
  }, []);

  // firebase handler
  // const scoreButtonHandler = () => {
  //   setnewUserObj([
  //     { playerName: "Imitiaz", score: 99, avatar: "avatarUrl" },
  //     { playerName: "Joey", score: 62, avatar: "avatarUrl" },
  //     { playerName: "Laura", score: 80, avatar: "avatarUrl" },
  //   ]);
  // };

  // useEffect to push
  useEffect(() => {
    const database = getDatabase(firebase);
    // reference database
    const dbRef = ref(database);

    push(dbRef, newUserObj);
  }, [newUserObj]);

  return (props.trigger) ? (
    <div className="popup">
    <h1>Userscores</h1>
    <p>Your Score is: {props.currentScore}</p>
    {
      userObj.map((user, index) => {
        return(
        <>
        <li key={index}>
          <p>{user.score}</p>
        </li>
        
        </>
        )
      })
    }
      <Link to='/'>Click here play again</Link>
    
    </div>
  ) : '';
};

export default UserScores;
