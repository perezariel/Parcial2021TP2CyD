/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */


const even = numbers =>
    numbers => {
        if (number % 2 === 0) {
            numbers2.push(e);
        }
    }

// const even = function (numbers) {
//     numbers => {
//         for (let i = 0; i < numbers.length; i++) {
//             const e = numbers[i];
//             if (e % 2 === 0) {
//                 return numbers2.push(e);
//             }
//         }
//     }
// }

const odd = function (numbers) {
    numbers => {
        for (let i = 0; i < numbers.length; i++) {
            const e = numbers[i];
            if (e % 2 != 0) {
                numbers2.push(e);
            }
        }
    }
}
// TESTS (no modificar)
const arrEqual = (a1, a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4, 2, 6, 1, 0, 2, 5]), [4, 2, 6, 0, 2]));
console.log(arrEqual(odd([4, 2, 6, 1, 0, 2, 5]), [1, 5]));
