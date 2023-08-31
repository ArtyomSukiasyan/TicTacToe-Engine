import { X } from "../constants/texts";
import getColumnIndices from "./getColumnIndices";
import getColumnValues from "./getColumnValues";
import getDiagIndices from "./getDiagIndices";
import getDiagValues from "./getDiagValues";
import getFreeCellIndices from "./getFreeCellIndices";
import getRowIndices from "./getRowIndices";
import getRowValues from "./getRowValues";
import isInArray from "./isInArray";
import shuffleArray from "./shuffleArray";
import sumArray from "./sumArray";

export default function getFirstWithTwoInARow(agent: string, cells: string[]) {
  const sum = agent === X ? 2 : 6;
  const freeCells = shuffleArray(getFreeCellIndices(cells));

  for (let i = 0; i < freeCells.length; i++) {
    for (let j = 0; j < 3; j++) {
      const rowV = getRowValues(j, cells);
      const rowI = getRowIndices(j);
      const colV = getColumnValues(j, cells);
      const colI = getColumnIndices(j, cells);

      if (sumArray(rowV) === sum && isInArray(freeCells[i], rowI)) {
        return freeCells[i];
      }

      if (sumArray(colV) === sum && isInArray(freeCells[i], colI)) {
        return freeCells[i];
      }
    }

    for (let j = 0; j < 2; j++) {
      const diagV = getDiagValues(j, cells);
      const diagI = getDiagIndices(j);

      if (sumArray(diagV) === sum && isInArray(freeCells[i], diagI)) {
        return freeCells[i];
      }
    }
  }

  return -1;
}
