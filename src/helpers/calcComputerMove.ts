import { empty, X } from "../constants/texts";
import { EDifficulty } from "../models/difficulty.enum";
import getFirstWithTwoInARow from "./getFirstWithTwoInARow";
import getFreeCellIndices from "./getFreeCellIndices";
import intRandom from "./intRandom";

export default function calcComputerMove(
  cells: string[],
  moves: number,
  computer: string,
  player: string,
  difficulty: EDifficulty
) {
  let cell = -1;
  let candidateCells = [];
  const corners = [0, 2, 6, 8];

  const isHard = difficulty === EDifficulty.hard;

  if (moves >= 3) {
    cell = getFirstWithTwoInARow(computer, cells);

    if (cell === -1) {
      cell = getFirstWithTwoInARow(player, cells);
    }

    if (moves === 3 && cells[4] === computer && isHard) {
      const edges = [1, 3, 5, 7];
      const freeEdges = edges.filter(idx => cells[idx] === empty);
      
      if ((cells[0] === player && cells[8] === player) || 
          (cells[2] === player && cells[6] === player)) {

            if (freeEdges.length > 0) {
          return freeEdges[intRandom(0, freeEdges.length - 1)];
        }
      }
    }

    if (cell === -1) {
      if (cells[4] === empty && isHard) {
        cell = 4;
      } else {
        candidateCells = getFreeCellIndices(cells);
        cell = candidateCells[intRandom(0, candidateCells.length - 1)];
      }
    }

    if (moves === 3 && cells[4] === computer && player === X && isHard) {
      if (cells[7] === player && (cells[0] === player || cells[2] === player)) {
        candidateCells = [6, 8];
        return candidateCells[intRandom(0, 1)];
      }

      if (cells[5] === player && (cells[0] === player || cells[6] === player)) {
        candidateCells = [2, 8];
        return candidateCells[intRandom(0, 1)];
      }

      if (cells[3] === player && (cells[2] === player || cells[8] === player)) {
        candidateCells = [0, 6];
        return candidateCells[intRandom(0, 1)];
      }

      if (cells[1] === player && (cells[6] === player || cells[8] === player)) {
        candidateCells = [0, 2];
        return candidateCells[intRandom(0, 1)];
      }
    }

    if (moves === 3 && cells[4] === player && player === X && isHard) {
      if (cells[2] === player && cells[6] === computer) {
        return 8;
      }

      if (cells[0] === player && cells[8] === computer) {
        return 6;
      }

      if (cells[8] === player && cells[0] === computer) {
        return 2;
      }

      if (cells[6] === player && cells[2] === computer) {
        return 0;
      }
    }

    return cell;
  }

  if (moves === 1 && cells[4] === player && isHard) {
    return corners[intRandom(0, 3)];
  }

  if (moves === 2 && cells[4] === player && computer === X && isHard) {
    switch (computer) {
      case cells[0]:
        return 8;
      case cells[2]:
        return 6;
      case cells[6]:
        return 2;
      case cells[8]:
        return 8;
      default:
        return cell;
    }
  }

  if (moves === 0 && intRandom(1, 10) < 8) {
    return corners[intRandom(0, 3)];
  }

  if (cells[4] === empty && isHard) {
    return 4;
  }

  candidateCells = getFreeCellIndices(cells);

  return candidateCells[intRandom(0, candidateCells.length - 1)];
}
