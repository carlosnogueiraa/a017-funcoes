function soma (num1, num2) {
    let total = (num1 + num2)
    return total
}

function subtracao (num1, num2) {
    let total = (num1 - num2)
    return total
}

function multiplicacao (num1, num2) {
    let total = (num1 * num2)
    return total
}

function divisao (num1, num2) {
    let total = (num1 / num2)
    return total
}

let num1 = +prompt("Digite um número")
let num2 = +prompt("Digite um número")

console.log(soma(num1,num2))
console.log(subtracao(num1,num2))
console.log(multiplicacao(num1,num2))
console.log(divisao(num1,num2))

