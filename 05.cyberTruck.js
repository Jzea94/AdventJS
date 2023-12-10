function cyberReindeer(road, time) {
  let arr = [...road]
  const result = [road]
  const timeInit = time

  while (time > 1) {    
    const positionS = arr.indexOf("S")

    if (time === timeInit - 4) {
      arr = arr.join("").replaceAll("|", "*").split('')
    }

    if (arr[positionS + 1] !== "|") {      
      road[positionS] === '|' ?
      arr.splice(positionS, 2, "*", "S") :
      arr.splice(positionS, 2, ".", "S")
      result.push(arr.join(""))        
    } else result.push(arr.join(""))

    time--
  }
  return result
}

const road = 'S..||||||.'
const time = 9 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)