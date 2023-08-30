import { IScore } from "../models/score";

export default function Score({ score }: { score: IScore }) {
  return (
    <section>
      <div className="score-container">
        <span>Computer</span>
        <span>Draws</span>
        <span>Player</span>
      </div>
      <div className="score-container">
        <span>{score.computer}</span>
        <span>{score.draws}</span>
        <span>{score.player}</span>
      </div>
    </section>
  );
}
