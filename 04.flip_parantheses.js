function decode(message) {
  const regex = /\(([^()]*)\)/
  // console.log(regex.test(message))
  
  while (regex.test(message)) {
    //cadena.replace(regexp|substr, nuevoValor|función)
    message = message.replace(regex, (_, contenido) => 
    [...contenido].reverse().join(''))
  }
  return message
}

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus


/**
 *      /\(([^{}]*)\)/g
 * 
 *      /      => Inicia y finaliza la RegExp
 *      \( \)  => Busca patrones de message que se encuentren dentro de paréntesis
 *      ( )    => Crea un grupo de captura, es decir, toma todos los elementos dentro de ellos 
 *      [ ]    => Define un conjunto de caracteres, es decir, es quien especifica caracteres son validos
 *      ^      => Coincide con el inicio de una cadena de message
 *      *      => verifica si el carácter anterior a él se repite al menos cero o mas veces * 
*/