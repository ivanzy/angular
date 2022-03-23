//let pokemons = ['Gengar', 'Kadabra', 'Psyduck'];

const charmander = {
  nome: 'foguinho',
  level: 8,
  moveset: ['tackle', 'ember', 'leer'],
};

for (let key in charmander){
  console.log(`a chave é ${key} e o valor é ${charmander[key]}`);
}
