export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => {
        return (
          <li key={`${turn.square.row}-${turn.square.col}`}>
            {`${turn.player} played ${turn.square.row} - ${turn.square.col}`}
          </li>
        );
      })}
    </ol>
  );
}
