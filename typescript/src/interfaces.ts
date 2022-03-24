interface UserInterface {
  id: number;
  nome: string;
  sexo?: string;
}

//?
//readonly

// type pode ser sado com primitivos
// interface apenas com objetos

interface calc {
  (a: number, b: number): number;
}

const mult: calc = function (a: number, b: number): number {
  return a * b;
};
