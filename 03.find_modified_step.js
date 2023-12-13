/**
 * escribir una función que identifique y devuelva el primer paso extra que se 
 * ha añadido o eliminado en la cadena de fabricación. 
 * ⚠️ No se podrán agregar y eliminar pasos al mismo tiempo
 * ⚠️ La modificación puede ocurrir en cualquier lugar de la cadena.
*/

function findNaughtyStep(original, modified) {
  const [lessWords, mostWords] = 
  [original, modified].sort((a, b) => a.length - b.length)
  return [...mostWords].find((x, i) => lessWords[i] != x) ?? ''
}

const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified))

// score: 270

/**
function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return ''

  const iterator = modified.length > original.length ? modified : original

  for (let index = 0; index < iterator.length; index++) {
    if (original[index] !== modified[index]) {
      return iterator[index]
    }
  }
}
//score => 350
*/