import { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import Option from "../Option/Option";

import { v4 as uuidv4 } from 'uuid';

import './Question.css';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div id="question">
            <p>Pergunta de {Number(quizState.currentQuestion) + 1} a {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option key={uuidv4()} option={option}/>
                ))}
            </div>
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
        </div>
    )
}

export default Question