// function saludar (amigo,funcionComoArgumento){
//     console.log(`Hola ${amigo}`)
//     funcionComoArgumento("Juana")
// }

// saludar("Lucía", funcionCallback)

// function funcionCallback(persona){
// console.log(`Fin del saludo ${persona}`)
// }

//---------------------------------------
//lo que sigue abajo es una suma con callback

// const sumar = (numeros, procesarNumeros)=>{
// var suma= procesarNumeros(numeros)
// console.log(suma)
// }
// // function procesador(number){
// //     return `${number[0] + number[1]}`
// // }
// sumar([1,5], (number)=>{
//     return `${number[0] + number[1]}`
// })


const bad = {
    nombre: "Bad",
    age: 32
}

const {nombre, age} = bad

console.log(nombre, age)