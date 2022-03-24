/* 
undefined, null, boolean, string, symbol e objeto
*/

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean

// CUIDADO COM NaN
console.log(typeof NaN);

console.log(NaN === NaN);
console.log(isNaN(NaN));

console.log(1 / 0);
console.log(1 / -0);

//escreva uma funcão para achar o maior número de um Array

//BigInteger

const x = 2n ** 53n;
const y = x + 1n;

//Symbol
let Sym1 = Symbol('Sym');
let Sym2 = Symbol('Sym');

console.log(Sym1 === Sym2);

const idSym = Symbol('id');
let user = {
  id: 1234,
  nome: 'Ivan',
  cidade: 'bologna',
  [idSym]: 91295815981928312,
};

for (let key in user) console.log(key);
console.log(user[idSym]);

// crie uma função reverse
// crie uma função que verifique se um elemento existe no array

let hoje = new Date();
console.log(hoje);
console.log(hoje.toDateString());
console.log(hoje.getTime());
console.log(Date.now());

// ano mes dia hora mimuto segundo
console.log(new Date(2019, 0, 15, 11, 30));
console.log(hoje.getUTCHours());
console.log(hoje.toUTCString());
console.log(hoje.toString());
