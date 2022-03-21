let numeros = [2, 4, 6, 8, 10, 12];

console.log(numeros);
console.log(numeros[0]);
console.log(numeros.length);
//1. Como acessar o último  item de um array?
//2. Construa uma função que retorne true se um elemento existir no array
//3. COnstrua uma função que dado um elemento, retorne sua posição. Retorna -1 caso o elemento não exista no array não exista
// 4. Construa uma função que adiciona um novo elemento na última posição do array
// 5. Construa uma função que remova a última posição do Array
// 6. Construa uma função que retorne as últimas n posições do Array
// 7. Construa uma função que recebe dois arrays e retorne um array concatenado
// 8. Crie um função que receba um array e uma função de entrada e execute essa função em todos os elementos do array
// 9. Crie um função que receba um array e uma função de entrada e retorne apenas os elementos para os quais essa função for verdade
// 10. Crie um função que receba um array e uma função de entrada e retorne true se ela for verdadeira para todos os elementos do array
// 11. Crie uma função que receba um array e uma função que possui duas entradas

// Copiar um array sem ser por referência
const fruits = ['Strawberry', 'Mango'];

const fruitsCopy1 = [...fruits];

const fruitsCopy2 = Array.from(fruits);

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
