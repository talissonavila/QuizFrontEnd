import { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";

import Welldone from "../../img/welldone.svg"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='gameover'>
            <h2>Fim de jogo</h2>
            <p>Pontuação: { quizState.score } </p>
            <p>Você acertou { quizState.score } de { quizState.questions.length } perguntas</p>
            <img src={Welldone} alt="Imagem de congratulação pelo fim do jogo" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver