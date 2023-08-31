export default function getDiagValues(arg: number, cells: string[]) {
  if (arg !== 1 && arg !== 0) {
    return [];
  }

  const newCells = [];

  if (arg === 0) {
    newCells.push(cells[0]);
    newCells.push(cells[4]);
    newCells.push(cells[8]);

    return newCells;
  }
  
  newCells.push(cells[2]);
  newCells.push(cells[4]);
  newCells.push(cells[6]);

  return newCells;
}
