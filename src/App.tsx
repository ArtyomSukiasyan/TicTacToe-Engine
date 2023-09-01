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
  const [cells, setCells] = useState<string[]>(new Array(9).fill(empty));
  const [score, setScore] = useState<IScore>({
    draws: 0,
    player: 0,
    computer: 0,
  });
  const [announceText, setAnnounceText] = useState(empty);
  const [gameOver, setGameOver] = useState(false);
  const [optionsDlg, setOptionsDlg] = useState(true);
  const [turn, setTurn] = useState(X);
  const [difficulty, setDifficulty] = useState(EDifficulty.hard);
  const [player, setPlayer] = useState(X);
  const [computer, setComputer] = useState(O);
  const [moves, setMoves] = useState(1);

  const restart = () => {
    setCells(new Array(9).fill(empty));
    setGameOver(false);
    setOptionsDlg(true);
    setTurn(X);
    setMoves(1);
  };

  const cellClicked = (id: string, prevCells: string[]) => {
    const cell = parseInt(id[id.length - 1]);

    if (prevCells[cell] || turn !== player || gameOver) {
      return;
    }

    setMoves((prev) => prev + 1);

    const newCells = [...prevCells];
    newCells[cell] = player;
    setCells(newCells);

    if (moves >= 5) {
      const winner = checkWin(newCells);

      if (winner) {
        return;
      }
    }

    setTurn(computer);

    makeComputerMove(newCells);
  };

  const makeComputerMove = (prevCells: string[]) => {
    const cell = calcComputerMove(
      prevCells,
      moves,
      computer,
      player,
      difficulty
    );

    setMoves((prev) => prev + 1);

    const newCells = [...prevCells];
    newCells[cell] = computer;
    setCells(newCells);

    if (moves >= 5) {
      checkWin(newCells);
    }

    if (!gameOver) {
      setTurn(player);
    }
  };

  const checkWin = (prevCells: string[]) => {
    const { winner: newWinner, score: newScore } = getWinner(
      prevCells,
      computer,
      player,
      score
    );

    if (newWinner === player || newWinner === computer || moves === 9) {
      endGame(newWinner);

      setGameOver(true);
      setScore(newScore);
    }

    return newWinner;
  };

  const getOptions = () => {
    if (player === O) {
      setTimeout(() => makeComputerMove(cells), 400);
    }

    setOptionsDlg(false);
  };

  const makePlayerAsX = () => {
    setPlayer(X);
    setTurn(X);
    setComputer(O);
  };

  const makePlayerAsO = () => {
    setPlayer(O);
    setTurn(X);
    setComputer(X);
  };

  const endGame = (who: string) => {
    setGameOver(true);
    const text = getAnnounceText(who, player, computer);

    setAnnounceText(text);

    setTimeout(() => {
      setAnnounceText(empty);
      restart();
    }, 1500);
  };

  return (
    <>
      <Board cells={cells} cellClicked={cellClicked} />

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
