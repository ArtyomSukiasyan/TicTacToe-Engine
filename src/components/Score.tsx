import { IScore } from "../models/score";

const computer = "Computer";
const draws = "Draws";
const player = "Player";

export default function Score({ score }: { score: IScore }) {
  return (
    <section>
      <Players />
      <Points score={score} />
    </section>
  );
}

function Players() {
  const players = [player, draws, computer];

  return (
    <div className="score-container">
      {players.map((el) => (
        <span key={el}>{el}</span>
      ))}
    </div>
  );
}

function Points({ score }: { score: IScore }) {
  return (
    <div className="score-container">
      {Object.values(score).map((el, idx) => (
        <span key={idx}>{el}</span>
      ))}
    </div>
  );
}
