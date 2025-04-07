//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" }
  ]

let a = 5
let b = 3

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
}

// 1
const ana = empleados[1]
console.log(ana)

// 2
const emailLuis = empleados[0].email
console.log(emailLuis)

// 3
if (a === 5 || b === 3) {
    a = 3;
    b = 5;
  }

// 4
const { yesterday, today:maximaHoy, tomorrow:maximaManana } = HIGH_TEMPERATURES

// 5
function sumEveryOther(...args) {
  return args.reduce((acumulado, num) => acumulado + num, 0)
}
console.log(sumEveryOther(1,2,3,4,5))

// 6
function addOnlyNums(...args) {
  return args
  .filter(arg => typeof arg === 'number')
  .reduce((acumulado, num) => acumulado + num, 0)
}
console.log(addOnlyNums(1,"perro", 6, "gato", "ratón", 7))

// 7
function countTheArgs(...args) {
  return args.length
}
console.log(countTheArgs(1,"perro", 6, "gato", "ratón", 7))

// 8
function combineTwoArrays(array1, array2) {
  const concatArray = [...array1, ...array2]
  return concatArray
}
console.log(combineTwoArrays([1, 2, 3], [4, 5, 6]))

// 9
function onlyUniques(...args) {
  return [...new Set(args)];
}
console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"))

//10
function combineAllArrays(...args) {
  const resultArray = [].concat(...args)
  return resultArray
}
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12]))

// 11
function sumAndSquare(...args) {
  for(i = 0; i < args.length; i++) {
    args[i] = args[i] ** 2
  }
  return args.reduce((acumulado, num) => acumulado + num, 0)
}

console.log(sumAndSquare(1,2,3,5))