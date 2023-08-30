import { ChangeEventHandler, MouseEventHandler } from "react";

interface IOptionsDlg {
  difficulty: number;
  player: number;
  getOptions: MouseEventHandler<HTMLButtonElement>;
  makePlayerAsX: ChangeEventHandler<HTMLInputElement>;
  makePlayerAsO: ChangeEventHandler<HTMLInputElement>;
  setDifficulty: Function;
}

export default function OptionsDlg({
  difficulty,
  player,
  getOptions,
  makePlayerAsX,
  makePlayerAsO,
  setDifficulty,
}: IOptionsDlg) {
  return (
    <div id="optionsDlg" className="modal">
      <div className="modal-content">
        <h2>How would you like to play?</h2>
        <h3>Difficulty:</h3>
        <label>
          <input
            type="radio"
            name="difficulty"
            checked={difficulty === 0}
            onChange={() => setDifficulty(0)}
          />
          easy
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            checked={difficulty === 1}
            onChange={() => setDifficulty(1)}
          />
          hard
        </label>
        <br />
        <h3>Play as:</h3>
        <label>
          <input
            type="radio"
            name="player"
            checked={player === 1}
            onChange={makePlayerAsX}
          />
          X
        </label>
        <label>
          <input
            type="radio"
            name="player"
            checked={player === 3}
            onChange={makePlayerAsO}
          />
          O<br />
        </label>
        <p>
          <button id="okBtn" onClick={getOptions}>
            Play
          </button>
        </p>
      </div>
    </div>
  );
}
