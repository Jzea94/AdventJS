function cyberReindeer(road, time) {
  const snapshots = [road]
  let lastChar = '.'

  for (let iteracion = 1; iteracion < time; iteracion++) {
    if (iteracion === 5) road = road.replaceAll('|', '*')   

    const matches = road.match(/S[\*\.]/g)

    if(matches) {
      road = road.replace(matches[0], lastChar + 'S')
      lastChar = matches[0][1]
    }

    snapshots.push(road)
  }
  return snapshots
} 
// score: 160

console.log(cyberReindeer('S..|...|..', 10))