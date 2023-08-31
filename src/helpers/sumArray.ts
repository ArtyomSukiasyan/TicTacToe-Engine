import { O, X } from "../constants/texts";

export default function sumArray(array: string[]) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const value = array[i] === X ? 1 : array[i] === O ? 3 : 0;
    sum += value;
  }

  return sum;
}
