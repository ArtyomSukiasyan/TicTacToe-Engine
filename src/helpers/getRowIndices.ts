export default function getRowIndices(index: number) {
  if (index !== 0 && index !== 1 && index !== 2) {
    return [];
  }

  const row = [];
  index = index * 3;
  row.push(index);
  row.push(index + 1);
  row.push(index + 2);

  return row;
}
