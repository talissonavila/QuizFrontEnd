import { QuizContext } from "./quiz-context";

export const QuizProvider = ({children}) => {
    const value = {name: "quiz"};
    return <QuizContext.Provider value={value}> { children } </QuizContext.Provider>
}
