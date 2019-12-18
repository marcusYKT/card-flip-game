const cards =
[
  "♠️", "♥️", "♣️", "♦️", "♠️", "♥️", "♣️", "♦️"
]

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export const data = shuffle(cards)