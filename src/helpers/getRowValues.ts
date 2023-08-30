export default function getRowValues(index: number, cells: number[]) {
  if (index !== 0 && index !== 1 && index !== 2) {
    return [];
  }

  const i = index * 3;

  return cells.slice(i, i + 3);
}
