// 1)
// Crear una función que tome una palabra y determine si empieza con 'G' (Mayúscula)
const startsWithG = (word) => {
   return (word.substr(0, 1) == "G"); 
}; 

console.log(startsWithG('Avocado'));

// 2)
// Crear una función que toma un arreglo de nombres y devuelva otro sólo con lo que empiezan con G
// Usar la función startsWithG
const namesWithG = (names) => {
 return names.filter(name => startsWithG(name)); 
}

console.log(namesWithG(['Barbara', 'Cristian', 'Gino', 'Isadora', 'Joaquín', 'Manuel', 'Ramiro']));

// 3)
// Crear una función que tome un número y devuelva su valor absoluto
const abs = (num) => {
    return (Math.abs(num)); 
}

console.log(abs(1), abs(-6), abs(0));

// 4)
// Crear una función que tome un arreglo de números y devuelva su valor absoluto
const absArray = (numbers) => {
   return (Math.abs([numbers])); 
}

console.log(absArray([1, -6, 0]));

// Extra
// Crear una función que tome un arreglo de números y devuelva su suma
const sum = numbers => {
    return numbers.reduce((a,b) => a + b); 
}

console.log(sum([3, 2, 1, 5])); 

// Ahora hacer lo mismo pero sin usar ningúna otra función o sentencia
// Ni reduce, ni forEach, ni for
const sumNoFunctions = (numbers) => {
    if (numbers.length === 0) {
        return 0;
      } else {
        return numbers[0] + sumNoFunctions(numbers.slice(1));
      }
}

console.log(sumNoFunctions([3, 2, 1, 4]));

// 

const absArrayNumbers = (numbers) => {
  return numbers.map(abs);
}

console.log(absArrayNumbers([1, -6, 0]));