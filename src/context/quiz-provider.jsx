import { useReducer } from "react";
import PropTypes from "prop-types";

import { QuizContext } from "./quiz-context";
import questions from "../data/questions_complete";

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  help: false,
  optionToHide: null,
};

const quizReducer = (state, action) => {
  let quizQuestions = null;
  let reorderedQuestions = null;

  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME":
      state.questions.forEach((question) => {
        if (question.category === action.payload) quizQuestions = question.questions;
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };

    case "REORDER_QUESTIONS":
      reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) endGame = true;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
        help: false,
      };
    }

    case "NEW_GAME": {
      return initialState;
    }

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    }

    case "SHOW_TIP": {
      return {
        ...state,
        help: "tip",
      };
    }

    case "REMOVE_OPTION": {
      const questionWithoutOption = state.questions[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option;
          repeat = false;
        }
      });

      return {
        ...state,
        optionToHide,
        help: true,
      };
    }

    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};