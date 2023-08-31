import { useState } from "react";
import "./App.css";
import Announce from "./components/Announce";
import Board from "./components/Board";
import OptionsDlg from "./components/OptionsDlg";
import Score from "./components/Score";
import { empty, O, X } from "./constants/texts";
import calcComputerMove from "./helpers/calcComputerMove";
import getAnnounceText from "./helpers/getAnnounceText";
import getWinner from "./helpers/getWinner";
import { EDifficulty } from "./models/difficulty.enum";
import { IScore } from "./models/score";


function Grid() {
  const [cells, setCells] = useState(new Array(9).fill(0));
  const [score, setScore] = useState<IScore>({
    draws: 0,
    player: 0,  
    computer: 0,
  });
  const [announceText, setAnnounceText] = useState(empty);
  const [gameOver, setGameOver] = useState(false);
  const [values, setValues] = useState(new Array(9).fill(null));
  const [optionsDlg, setOptionsDlg] = useState(true);
  const [playerText, setPlayerText] = useState(X);
  const [computerText, setComputerText] = useState(O);
  const [whoseTurn, setWhoseTurn] = useState(1);
  const [difficulty, setDifficulty] = useState(EDifficulty.hard);
  const [player, setPlayer] = useState(1);
  const [computer, setComputer] = useState(3);
  const [winner, setWinner] = useState(0);
  const [moves, setMoves] = useState(1);

  const cellClicked = (id: string, prevCells: number[]) => {
    const cell = parseInt(id[id.length - 1]);

    if (prevCells[cell] > 0 || whoseTurn !== player || gameOver) {
      return;
    }

    setMoves((prev) => prev + 1);

    const newValues = [...values];
    newValues[Number(id)] = playerText;
    setValues(newValues);

    const newCells = [...prevCells];
    newCells[cell] = player;
    setCells(newCells);

    if (moves >= 5) {
      const winner = checkWin(newCells);
      setWinner(winner);
    }

    if (winner === 0) {
      setWhoseTurn(computer);

      makeComputerMove(newValues, newCells);
    }
  };

  const makeComputerMove = (prevValues: string[], prevCells: number[]) => {
    if (gameOver) {
      return;
    }

    const cell = calcComputerMove(
      prevCells,
      moves,
      computer,
      player,
      difficulty
    );

    setMoves((prev) => prev + 1);

    const newValues = [...prevValues];
    newValues[cell] = computerText;
    setValues(newValues);

    const newCells = [...prevCells];
    newCells[cell] = computer;
    setCells(newCells);

    if (moves >= 5) {
      const winner = checkWin(newCells);
      setWinner(winner);
    }

    if (winner === 0 && !gameOver) {
      setWhoseTurn(player);
    }
  };

  const checkWin = (prevCells: number[]) => {
    const { winner: newWinner, score: newScore } = getWinner(
      prevCells,
      computer,
      player,
      score
    );

    if (newWinner === player || newWinner === computer || moves === 9) {
      endGame(newWinner);
      setScore(newScore);
    }

    return newWinner;
  };

  const getOptions = () => {
    if (player === 3) {
      setTimeout(() => makeComputerMove(values, cells), 400);
    }

    setOptionsDlg(false);
  };

  const makePlayerAsX = () => {
    setPlayer(1);
    setWhoseTurn(1);
    setPlayerText(O);
    setComputerText(X);
    setComputer(1);
  };

  const makePlayerAsO = () => {
    setPlayer(3);
    setWhoseTurn(1);
    setPlayerText(O);
    setComputerText(X);
    setComputer(1);
  };

  const endGame = (who: number) => {
    setGameOver(true);

    const text = getAnnounceText(who, player, computer);

    setAnnounceText(text);

    setTimeout(() => setAnnounceText(empty), 1500);
  };

  return (
    <>
      <Board cells={cells} values={values} cellClicked={cellClicked} />

      <Score score={score} />
      {announceText && <Announce text={announceText} />}

      {optionsDlg && (
        <OptionsDlg
          difficulty={difficulty}
          getOptions={getOptions}
          makePlayerAsX={makePlayerAsX}
          makePlayerAsO={makePlayerAsO}
          player={player}
          setDifficulty={setDifficulty}
        />
      )}
    </>
  );
}

export default Grid;
