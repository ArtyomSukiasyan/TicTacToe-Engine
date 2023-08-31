import { empty } from "../constants/texts";
import { IScore } from "../models/score";
import getColumnIndices from "./getColumnIndices";
import getColumnValues from "./getColumnValues";
import getDiagIndices from "./getDiagIndices";
import getDiagValues from "./getDiagValues";
import getFreeCellIndices from "./getFreeCellIndices";
import getRowIndices from "./getRowIndices";
import getRowValues from "./getRowValues";

export default function getWinner(
  cells: string[],
  computer: string,
  player: string,
  score: IScore
) {
  let winner = empty;

  for (let i = 0; i <= 2; i++) {
    const row = getRowValues(i, cells);

    if (row[0] && row[0] === row[1] && row[0] === row[2]) {
      if (row[0] === computer) {
        score = { ...score, computer: score.computer + 1 };

        winner = computer;
      } else {
        score = { ...score, player: score.player + 1 };
        winner = player;
      }
      const tmpAr = getRowIndices(i);

      for (let j = 0; j < tmpAr.length; j++) {
        const str = tmpAr[j].toString();
        document.getElementById(str)?.classList.add("win-color");
      }

      return { winner, score };
    }
  }

  for (let i = 0; i <= 2; i++) {
    const col = getColumnValues(i, cells);

    if (col[0] && col[0] === col[1] && col[0] === col[2]) {
      if (col[0] === computer) {
        score = { ...score, computer: score.computer + 1 };

        winner = computer;
      } else {
        score = { ...score, player: score.player + 1 };
        winner = player;
      }

      const tmpAr = getColumnIndices(i, cells);

      for (let j = 0; j < tmpAr.length; j++) {
        const str = tmpAr[j].toString();
        document.getElementById(str)?.classList.add("win-color");
      }

      return { winner, score };
    }
  }

  for (let i = 0; i <= 1; i++) {
    const diagonal = getDiagValues(i, cells);
    if (
      diagonal[0] &&
      diagonal[0] === diagonal[1] &&
      diagonal[0] === diagonal[2]
    ) {
      if (diagonal[0] === computer) {
        score = { ...score, computer: score.computer + 1 };
        winner = computer;
      } else {
        score = { ...score, player: score.player + 1 };

        winner = player;
      }

      const tmpAr = getDiagIndices(i);

      for (let j = 0; j < tmpAr.length; j++) {
        const str = tmpAr[j].toString();

        document.getElementById(str)?.classList.add("win-color");
      }

      return { winner, score };
    }
  }

  const myArr = getFreeCellIndices(cells);
  if (myArr.length === 0) {
    winner = empty;
    score = { ...score, draws: score.draws + 1 };

    return { winner, score };
  }

  return { winner, score };
}
