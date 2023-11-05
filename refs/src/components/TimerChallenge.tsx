import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

type Props = {
  title: string;
  targetTime: number;
};

export default function TimerChallenge({ title, targetTime }: Props) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef<number | undefined>();
  const dialog = useRef<HTMLDialogElement | undefined>();

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);

    dialog.current?.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current?.open();
  }

  return (
    <section className="challenge">
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />
      <h2>{title}</h2>
      {timeRemaining <= 0 && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeIsActive ? handleStop : handleStart}>
          {timeIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeIsActive ? "active" : ""}>
        {timeIsActive ? "Time is running..." : "Time inactive"}
      </p>
    </section>
  );
}
