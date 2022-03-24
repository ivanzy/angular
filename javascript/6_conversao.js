const x = 10;
const y = '5';

let soma = x + y;

//soma = Number(y) + x
console.log(soma);

// strings
let resultado = '4' - '3';
console.log(resultado);

resultado = '4' - 3;
console.log(resultado);

resultado = '12' / '3';
console.log(resultado);

resultado = '3' - 'quatro';
console.log(resultado);

// boolean

resultado = 4 + true;
console.log(resultado);

resultado = '4' + true;
console.log(resultado);

resultado = 5 + false;
console.log(resultado);

// null

resultado = 6 + null;
console.log(resultado);

resultado = '6' + null;
console.log(resultado);

// COnversão Explícita

resultado = Number('87');
console.log(resultado);

resultado = Number('87a');
console.log(resultado);

resultado = Number('');
console.log(resultado);

resultado = Number('21.03');
console.log(resultado);

resultado = +'21.03';
console.log(resultado);

// String
resultado = String(123);
console.log(resultado);

resultado = String(6 + 4);
console.log(resultado);

resultado = String(null);
console.log(resultado);

//ou
resultado = (1245).toString();
console.log(resultado);


//boolean

resultado = Boolean(0);
console.log(resultado);
resultado = Boolean(null);
console.log(resultado);
resultado = Boolean([]);
console.log(resultado);
resultado = Boolean(undefined);
console.log(resultado);
resultado = Boolean({});
console.log(resultado);
resultado = Boolean(NaN);
console.log(resultado);
resultado = Boolean(23)
console.log(resultado);
resultado = Boolean(' ')
console.log(resultado);
