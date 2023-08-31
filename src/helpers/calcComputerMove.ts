import { EDifficulty } from "../models/difficulty.enum";
import getFirstWithTwoInARow from "./getFirstWithTwoInARow";
import getFreeCellIndices from "./getFreeCellIndices";
import intRandom from "./intRandom";

export default function calcComputerMove(
  cells: number[],
  moves: number,
  computer: number,
  player: number,
  difficulty: EDifficulty
) {
  let cell = -1;
  let myArr = [];
  const corners = [0, 2, 6, 8];

  if (moves >= 3) {
    cell = getFirstWithTwoInARow(computer, cells);
    if (cell === -1) {
      cell = getFirstWithTwoInARow(player, cells);
    }

    if (cell === -1) {
      if (cells[4] === 0 && difficulty === EDifficulty.hard) {
        cell = 4;
      } else {
        myArr = getFreeCellIndices(cells);
        cell = myArr[intRandom(0, myArr.length - 1)];
      }
    }

    if (
      moves === 3 &&
      cells[4] === computer &&
      player === 1 &&
      difficulty === EDifficulty.hard
    ) {
      if (cells[7] === player && (cells[0] === player || cells[2] === player)) {
        myArr = [6, 8];
        cell = myArr[intRandom(0, 1)];
      } else if (
        cells[5] === player &&
        (cells[0] === player || cells[6] === player)
      ) {
        myArr = [2, 8];
        cell = myArr[intRandom(0, 1)];
      } else if (
        cells[3] === player &&
        (cells[2] === player || cells[8] === player)
      ) {
        myArr = [0, 6];
        cell = myArr[intRandom(0, 1)];
      } else if (
        cells[1] === player &&
        (cells[6] === player || cells[8] === player)
      ) {
        myArr = [0, 2];
        cell = myArr[intRandom(0, 1)];
      }
    } else if (
      moves === 3 &&
      cells[4] === player &&
      player === 1 &&
      difficulty === EDifficulty.hard
    ) {
      if (cells[2] === player && cells[6] === computer) {
        cell = 8;
      } else if (cells[0] === player && cells[8] === computer) {
        cell = 6;
      } else if (cells[8] === player && cells[0] === computer) {
        cell = 2;
      } else if (cells[6] === player && cells[2] === computer) {
        cell = 0;
      }
    }
  } else if (
    moves === 1 &&
    cells[4] === player &&
    difficulty === EDifficulty.hard
  ) {
    cell = corners[intRandom(0, 3)];
  } else if (
    moves === 2 &&
    cells[4] === player &&
    computer === 1 &&
    difficulty === EDifficulty.hard
  ) {
    if (cells[0] === computer) {
      cell = 8;
    } else if (cells[2] === computer) {
      cell = 6;
    } else if (cells[6] === computer) {
      cell = 2;
    } else if (cells[8] === computer) {
      cell = 0;
    }
  } else if (moves === 0 && intRandom(1, 10) < 8) {
    cell = corners[intRandom(0, 3)];
  } else {
    if (cells[4] === 0 && difficulty === EDifficulty.hard) {
      cell = 4;
    } else {
      myArr = getFreeCellIndices(cells);
      cell = myArr[intRandom(0, myArr.length - 1)];
    }
  }

  return cell;
}
