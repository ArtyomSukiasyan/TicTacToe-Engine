import { O, X } from "../constants/texts";

export default function sumArray(array: string[]) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case X:
        sum += 1;
        break;
      case O:
        sum += 3;
        break;
      default:
        break;
    }
  }

  return sum;
}
