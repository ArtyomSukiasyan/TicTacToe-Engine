import { computerWins, draw, youWin } from "../constants/texts";

export default function getAnnounceText(
  who: string,
  player: string,
  computer: string
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
