import { useContext } from "react";

import { QuizContext } from "./context/quiz-context";
import Welcome from "./components/Welcome/Welcome";
import Question from "./components/Question/Question";
import GameOver from "./components/GameOver/GameOver";
import PickCategory from "./components/PickCategory/PickCategory";

import './App.css'

function App() {
  const [quizState] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;