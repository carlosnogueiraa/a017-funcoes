// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function nome () {
//     const name = prompt("Digite um nome")
//     console.log(`Olá, ${name}!`)
// }

// nome()


// Com Arrow Funcion
// const nome = () => {
//     const name = prompt("Digite um nome")
//     console.log(`Olá, ${name}!`)
// }

// nome()


// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada () {
//     const num = prompt("Digite um número para tabuada")
//     for (i=0; i<=10; i++) {
//         console.log(i*num)
//     }
// }

// tabuada()


// Com Arrow Funcion
const tabuada = () => {
    const num = prompt("Digite um número para tabuada")
    for (i=0; i<=10; i++) {
        let multi = i*num
        console.log(multi)
    }
}

tabuada()

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

