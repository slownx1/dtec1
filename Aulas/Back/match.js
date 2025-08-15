let num = 9.4

let resultado = Math.floor(num)
console.log(resultado)

resultado = Math.ceil(num)
console.log(resultado)

resultado = Math.round(num)
console.log(resultado)

let maior = Math.max(1, 3, 1500, -10, 99);
console.log(maior);

let menor = Math.min(1, 3, 1500, -10, 99);
console.log(menor); // -10

let aleatorio = Math.random();
console.log(aleatorio); // ex: 0.3847382983

let min = 5;
let max = 10;

let re = Math.random() * (max - min) + min;
console.log(re); // Número entre 5 e 10