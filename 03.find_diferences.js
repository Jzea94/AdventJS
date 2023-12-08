function findNaughtyStep (original, modified) {
  const opc1 = [...original].every(element => modified.includes(element))
  if (original === modified) return ''
  else if (opc1) { // hubo un paso agregado
    let condition = original.split('')
    return [...modified].find(element => element !== condition.shift()) // encontramos el paso agregado
  } else if(!opc1) { // hubo pasos eliminados pero no sabemos si hubo pasos agregados
    return  [...original].find(element => ![...modified].includes(element))
  }
}

const original = 'stepfo'
const modified = 'stepfor'
const result = findNaughtyStep(original, modified)
console.log(result)

console.log('-----------------------------------------------------------------------------')

function findNaughtyStep2(original, modified) {
  if (original === modified) {
    return ''
  } else if ([...original].every(element => modified.includes(element))) {
    const arrOriginal = original.split('')
    return [...modified].find(element => element !== arrOriginal.shift());
  } else return [...original].find(element => ![...modified].includes(element));
}

const original2 = 'stepfo'
const modified2 = 'stepfor'
const result2 = findNaughtyStep2(original2, modified2)
console.log(result2)