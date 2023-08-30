export default function shuffleArray(array: number[]) {
  let counter = array.length;
  let temp;
  let index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
