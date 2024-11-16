import { useContext } from "react"
import PropTypes from "prop-types";

import { QuizContext } from "../../context/quiz-context"

import "./Option.css"

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
  hide: PropTypes.bool,
};


export default Option;