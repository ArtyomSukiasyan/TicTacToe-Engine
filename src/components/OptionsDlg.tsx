import { ChangeEventHandler, MouseEventHandler } from "react";
import { O, X } from "../constants/texts";
import { EDifficulty } from "../models/difficulty.enum";

interface IDifficultyOptions {
  difficulty: EDifficulty;
  setDifficulty: Function;
}

interface IPlayerOptions {
  player: string;
  makePlayerAsX: ChangeEventHandler<HTMLInputElement>;
  makePlayerAsO: ChangeEventHandler<HTMLInputElement>;
}

interface IOptionsDlg extends IDifficultyOptions, IPlayerOptions {
  getOptions: MouseEventHandler<HTMLButtonElement>;
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
        <DifficultyOptions
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <PlayerOptions
          player={player}
          makePlayerAsX={makePlayerAsX}
          makePlayerAsO={makePlayerAsO}
        />
        <p>
          <button id="okBtn" onClick={getOptions}>
            Play
          </button>
        </p>
      </div>
    </div>
  );
}

function DifficultyOptions({ difficulty, setDifficulty }: IDifficultyOptions) {
  const difficulties = [
    {
      name: "easy",
      checked: difficulty === EDifficulty.easy,
      onChange: () => setDifficulty(EDifficulty.easy),
    },
    {
      name: "hard",
      checked: difficulty === EDifficulty.hard,
      onChange: () => setDifficulty(EDifficulty.hard),
    },
  ];
  return (
    <>
      <h2>How would you like to play?</h2>
      <h3>Difficulty:</h3>
      {difficulties.map((el) => (
        <label key={el.name}>
          <input
            type="radio"
            name="difficulty"
            checked={el.checked}
            onChange={el.onChange}
          />
          {el.name}
        </label>
      ))}
    </>
  );
}

function PlayerOptions({
  player,
  makePlayerAsX,
  makePlayerAsO,
}: IPlayerOptions) {
  const players = [
    {
      name: X,
      checked: player === X,
      onChange: makePlayerAsX,
    },
    {
      name: O,
      checked: player === O,
      onChange: makePlayerAsO,
    },
  ];

  return (
    <>
      <h3>Play as:</h3>
      {players.map((el) => (
        <label key={el.name}>
          <input
            type="radio"
            name="player"
            checked={el.checked}
            onChange={el.onChange}
          />
          {el.name}
        </label>
      ))}
    </>
  );
}
