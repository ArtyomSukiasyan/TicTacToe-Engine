import { empty } from "../constants/texts";
import { IScore } from "../models/score";
import getColumnValues from "./getColumnValues";
import getDiagValues from "./getDiagValues";
import getFreeCellIndices from "./getFreeCellIndices";
import getRowValues from "./getRowValues";

export default function getWinner(
  cells: string[],
  computer: string,
  player: string,
  score: IScore
) {
  for (let i = 0; i <= 2; i++) {
    const row = getRowValues(i, cells);

    if (row[0] && row[0] === row[1] && row[0] === row[2]) {
      if (row[0] === computer) {
        score = { ...score, computer: score.computer + 1 };

        return { winner: computer, score };
      }

      score = { ...score, player: score.player + 1 };

      return { winner: player, score };
    }
  }

  for (let i = 0; i <= 2; i++) {
    const col = getColumnValues(i, cells);

    if (col[0] && col[0] === col[1] && col[0] === col[2]) {
      if (col[0] === computer) {
        score = { ...score, computer: score.computer + 1 };

        return { winner: computer, score };
      }

      score = { ...score, player: score.player + 1 };

      return { winner: player, score };
    }
  }

  for (let i = 0; i <= 1; i++) {
    const diagonal = getDiagValues(i, cells);

    const isLeftToRight = diagonal[0] === diagonal[1];
    const isRightToLeft = diagonal[0] === diagonal[2];

    if (diagonal[0] && isLeftToRight && isRightToLeft) {
      if (diagonal[0] === computer) {
        score = { ...score, computer: score.computer + 1 };

        return { winner: computer, score };
      }

      score = { ...score, player: score.player + 1 };

      return { winner: player, score };
    }
  }

  const empties = getFreeCellIndices(cells);

  if (empties.length === 0) {
    score = { ...score, draws: score.draws + 1 };

    return { winner: empty, score };
  }

  return { winner: empty, score };
}
