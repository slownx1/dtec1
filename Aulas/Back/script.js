const numero = Number(prompt("Numero: "))

const l1 = numero ** 0.5
const l2 = Number.isInteger(numero)
const l3 = Number.isNaN(numero)
const l4 = Math.floor(numero)
const l5 = Math.ceil(numero)
const l6 = numero.toFixed(2)

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

texto.innerHTML += `Seu numero e : ${numero} <br>`
texto.innerHTML += `Raiz quadrada: ${l1}<br>`
texto.innerHTML += `inteiro : ${l2} <br>`
texto.innerHTML += `NaN ? : ${l3} <br>`
texto.innerHTML += `Arrendondar p baixo: ${l4}<br>`
texto.innerHTML += `Arrendondar p cima: ${l5}<br>`
texto.innerHTML += `casa decimal: ${l6}`

