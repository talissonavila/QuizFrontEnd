import QuizImg from "../../img/quiz.svg"
import { QuizContext } from "../../context/quiz-context";
import { useContext } from "react";

import "./Welcome.css"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar o jogo</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={QuizImg} alt="Imagem inicial do quiz" />
    </div>
  )
}

export default Welcome;