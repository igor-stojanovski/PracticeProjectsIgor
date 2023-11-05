import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  let playerName = useRef<HTMLInputElement | null>(null);

  function handleSubmit() {
    if (playerName.current) {
      setEnteredPlayerName(playerName.current.value);
    }
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
