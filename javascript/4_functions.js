//declarar
function soma(a, b) {
  return a + b;
}

soma(90, 42);

// quantos parâmetros de entrada?

//qual a saída?

//como chamar?

/* console.log(soma(1, 2));
console.log(soma('roberto', 2)); */

//Os parâmetros de entrada foram passados por valor ou por referência?

let meuPersonagem = {
  nome: 'Gandalf',
  classe: 'mago',
  level: 10,
};

function levelUp(personagem) {
  personagem.level++;
}

console.log(meuPersonagem);
levelUp(meuPersonagem);
console.log(meuPersonagem);

// Expresões de função e funções anônimas

const printPersonagem = function (personagem) {
  console.log(
    `O personagem ${personagem.nome} é um ${personagem.classe} de nível ${personagem.level}`
  );
};

printPersonagem(meuPersonagem);

// passando função como argumento

function map(f, a) {
  let result = [];
  for (let i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}

const cubo = function (x) {
  return x * x * x;
};

const quadrado = function (x) {
  return x * x;
};

const add = function (x) {
  return x + 1;
};

let numeros = [0, 2, 4, 6];
console.log(map(cubo, numeros));
console.log(map(quadrado, numeros));
console.log(map(add, numeros));

//Escreva mais um exemplo de chamada de função, com uma outra função de entrada

// Escreva uma função que possua uma função um dos parâmetros de entrada

// hoisting

console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}

// parâmetros default

function aumenta(n, fator = 2) {
  return n * fator;
}

console.log(aumenta(2));
console.log(aumenta(3, 5));

//desconstrução

function calculaHP({ level, classe }) {
  if (classe === 'mago') return level * 5;
  else return level * 10;
}

meuPersonagem.hp = {
  hpMax: calculaHP(meuPersonagem),
  hp: calculaHP(meuPersonagem),
};
console.log(meuPersonagem);

//return

function processa(input) {
  if (input === 0) return;
  // processamento complexo
  return input;
}

console.log(processa(0));

//veremos melhor sobre truthy a seguir
if (!processa(0)) console.log('deu ruim!');

//arrow functions

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
