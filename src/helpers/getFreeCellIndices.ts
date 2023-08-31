import { empty } from "../constants/texts";

export default function getFreeCellIndices(cells: string[]) {
  const resultArray = [];

  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === empty) {
      resultArray.push(i);
    }
  }

  return resultArray;
}
