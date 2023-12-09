function cyberReindeer(road, time) {
  while(time > 0) {
    const arr = [...road]
    if (time === 5) {

    }
    
    const positionS = arr.indexOf('S')
    if (arr[positionS+1] !== '|') {
      are[positionS+1] === '*') ?
      arr.splice(positionS, 2, '*', 'S') :
      arr.splice(positionS, 2, '.', 'S')
    }    
    time --
  }
  return // array
}

const road = 'S......|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/

/**
 * 1. encontrar la posición de S
 * 2. mover la S una posición a la derecha
 * 3. rellenar la posición anterior con un punto
 * 4. cuando time = 5, debo cambiar todos | por *
 */