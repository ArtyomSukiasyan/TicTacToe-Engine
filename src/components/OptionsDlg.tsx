import { ChangeEventHandler, MouseEventHandler } from "react";
import { O, X } from "../constants/texts";
import { EDifficulty } from "../models/difficulty.enum";

interface IOptionsDlg {
  difficulty: EDifficulty;
  player: string;
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
            checked={difficulty === EDifficulty.easy}
            onChange={() => setDifficulty(EDifficulty.easy)}
          />
          easy
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            checked={difficulty === EDifficulty.hard}
            onChange={() => setDifficulty(EDifficulty.hard)}
          />
          hard
        </label>
        <br />
        <h3>Play as:</h3>
        <label>
          <input
            type="radio"
            name="player"
            checked={player === X}
            onChange={makePlayerAsX}
          />
          X
        </label>
        <label>
          <input
            type="radio"
            name="player"
            checked={player === O}
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
