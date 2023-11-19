import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timerTimeout = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timerTimeout);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);

      return () => {
        clearInterval(interval);
      };
    }, 100);
  }, []);

  return (
    <progress
      value={remainingTime}
      max={timeout}
      id="question-time"
      className={mode}
    />
  );
}
