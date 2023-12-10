function findFirstRepeated(gifts) {
    const seenIds = new Set()
    for (const id of gifts) {
      if (seenIds.has(id)) return id
      seenIds.add(id)
    } return -1
  }
const giftIds = [2, 1, 2, 1, 3, 4]

console.log(findFirstRepeated(giftIds))

// 260 puntos