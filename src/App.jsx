import { useContext, useEffect } from "react";
import Welcome from "./components/Welcome/Welcome";
import Question from "./components/Question/Question";
import GameOver from "./components/GameOver/GameOver";
import { QuizContext } from "./context/quiz-context";

import './App.css'

function App() {
  const [ quizState, dispatch ] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <div className="App">
      <h2>Quiz Frontend</h2>
      {quizState.gameStage === "Start" && <Welcome /> }
      {quizState.gameStage === "Playing" && <Question /> }
      {quizState.gameStage === "End" && <GameOver /> }

    </div>
  )
}

export default App
