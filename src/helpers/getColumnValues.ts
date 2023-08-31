export default function getColumnValues(index: number, cells: string[]) {
  if (index !== 0 && index !== 1 && index !== 2) {
    return [];
  }

  const column = [];

  for (let i = index; i < cells.length; i += 3) {
    column.push(cells[i]);
  }

  return column;
}
