import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Question({
  onSelectAnswer,
  onSkipAnswer,
  questionIndex,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answeredState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answeredState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answeredState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answeredState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        selectedAnswer={answer.selectedAnswer}
        answeredState={answeredState}
        onSelect={handleSelectAnswer}
        answers={QUESTIONS[questionIndex].answers}
      />
    </div>
  );
}
