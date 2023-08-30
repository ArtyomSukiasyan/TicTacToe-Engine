export default function getFreeCellIndices(cells: number[]) {
  const resultArray = [];

  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 0) {
      resultArray.push(i);
    }
  }

  return resultArray;
}
