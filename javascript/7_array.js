let comidas = ['strogonoff', 'lasanha', 'pizza', 'churrasco'];

// 1. Como acessar o último  item de um array?
comidas[comidas.length - 1];
// 2. Construa uma função que retorne true se um elemento existir no array
function includes(array, elemento) {
  for (let item of array) if (item === elemento) return true;
  return false;
}
// 3. Construa uma função que dado um elemento, retorne sua posição. Retorna -1 caso o elemento não exista no array não exista
// 4. Construa uma função que adiciona um novo elemento na última posição do array
// 5. Construa uma função que remova a última posição do Array
// 6. Construa uma função que retorne as últimas n posições do Array
// 7. Construa uma função que recebe dois arrays e retorne um array concatenado
// 8. Crie um função que receba um array e
// uma função de entrada e execute essa função em todos os elementos do array
const every = (array, funcao) => {
  const resultados = [];
  for (let elemento of array) {
    resultados.push(funcao(elemento));
  }
  return resultados;
};

let numeros = [0, 2, 4, 8, 16, 32];
const quadrado = (x) => x * x;
//const cubo = (x) => x * x * x;

console.log(every(numeros, quadrado));
console.log(every(numeros, (num) => num * num));

// 9. Crie um função que receba um array e uma função de entrada e retorne
// apenas os elementos para os quais essa função for verdade
// 10. Crie um função que receba um array e uma função de entrada e
// retorne true se ela for verdadeira para todos os elementos do array

// Copiar um array sem ser por referência
const fruits = ['Strawberry', 'Mango'];

const fruitsCopy1 = [...fruits];

const fruitsCopy2 = Array.from(fruits);

// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();

//**************EXEMPLO DE FUNÇÃO QUE RECEBE UMA FUNÇÃO COMO UM DOS PARAMETROS ************/
function imprimeResult(a, b, funcao) {
  //console.log(`O RESULTADO É ${funcao(a, b)}`);
}
const adicao = (x, y) => x + y;
const subtracao = (x, y) => x - y;
const multiplicacao = (x, y) => x * y;
const divisao = (x, y) => x / y;

imprimeResult(2, 3, adicao);
imprimeResult(40, 38, subtracao);
imprimeResult(25, 5, multiplicacao);
imprimeResult(20, 5, divisao);
