export default function getRowIndices(index: number) {
  if (index !== 0 && index !== 1 && index !== 2) {
    return [];
  }

  index = index * 3;

  const row = [];

  row.push(index);
  row.push(index + 1);
  row.push(index + 2);

  return row;
}
