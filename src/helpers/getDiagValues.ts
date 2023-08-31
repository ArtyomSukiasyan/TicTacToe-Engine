export default function getDiagValues(arg: number, cells: string[]) {
  if (arg !== 1 && arg !== 0) {
    return [];
  }

  const newSells = [];

  if (arg === 0) {
    newSells.push(cells[0]);
    newSells.push(cells[4]);
    newSells.push(cells[8]);
  } else {
    newSells.push(cells[2]);
    newSells.push(cells[4]);
    newSells.push(cells[6]);
  }

  return newSells;
}
