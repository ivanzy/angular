/*
Objetos e manipular objetos
 funcoes objetos
 */

const user = new Object();
user.nome = 'claudio';
user.idade = 30;
user.cidade = 'São Paulo';

const user2 = {
  nome: 'claudio',
  idade: 30,
  cidade: 'São Paulo',
};

const user3 = {};

user3['nome'] = 'claudio';
user3['idade'] = 30;
user3['cidade'] = 'São Paulo';

let propriedade = 'cpf';
user3[propriedade] = "123.123.123-xx"

//console.log(Object.keys(user3))

//escreva uma função que imprima o valor de todas as propriedades de um objeto
// escreva uma função que imprima o nome de todas as propriedades de um objeto
//escreva uma função que retorne true caso a propriedade exista em um objeto, false caso contrário

const check = (obj, prop) => 
 Object.keys(obj).includes(prop)


console.log(check(user3, "cpf"));
console.log(check(user3, "nacionalidade"));

//for(let elemento in user3) console.log(user3[elemento]);

