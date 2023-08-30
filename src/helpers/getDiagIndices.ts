export default function getDiagIndices(arg: number) {
  if (arg !== 1 && arg !== 0) {
    return [];
  }

  if (arg === 0) {
    return [0, 4, 8];
  }

  return [2, 4, 6];
}
