import { computerWins, draw, youWin } from "../constants/texts";

export default function getAnnounceText(
  who: number,
  player: number,
  computer: number
) {
  switch (who) {
    case player:
      return youWin;
    case computer:
      return computerWins;
    default:
      return draw;
  }
}
