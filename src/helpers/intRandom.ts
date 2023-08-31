export default function intRandom(min: number, max: number) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
