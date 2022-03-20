/* 
Var, let const
global, function, block
hoisting
 */

// Qual a diferença entre let, var e const?
const exemplo1 = () => {
  var meuNome = 'Ivan';
  let seuNome = 'Claudia';
  const outroNome = 'Osvaldo';

  function mudaNome(nome) {
    seuNome = nome;
  }

  console.log('Olá ' + meuNome);
  console.log('Olá ' + seuNome);
  console.log('Olá ' + outroNome);

  mudaNome('Ivan Dimitry');
  console.log('Muda Nome:' + meuNome);
};

//mostrar var, let e const  assim:
var teste = 30;

function funcao1() {
  return teste * 2;
}
//console.log(funcao1());
// ************************

//mostrar var, let e const  assim:
function funcao2() {
  var variavel = 30;
}
//console.log(variavel);
// ************************

//mostrar var, let e const  assim:
if (false) {
  var variavel = 30;
}
//console.log(variavel);
// ************************

// Entendendo o escopo
const exemplo2 = () => {
  var especie = 'humano';

  function transformar() {
    var especie = 'lobisomem';
    console.log(especie);
  }

  console.log(especie);
  transformar();
  console.log(especie);
};

const exemplo3 = () => {
  var luaCheia = true;

  let especie = 'humano';

  if (luaCheia) {
    let especie = 'lobisomem';
    console.log('É lua cheia. Edward atualmente é ' + especie);
  }

  console.log('Não é lua cheia. Edward atualmente é ' + especie);
};

const exemplo4 = () => {
  var especie = 'humano';

  if (luaCheia) {
    var especie = 'lobisomem';
    console.log('É lua cheia. Edward atualmente é ' + especie);
  }

  console.log('Não é lua cheia. Edward atualmente é ' + especie);
};

exemplo3();
