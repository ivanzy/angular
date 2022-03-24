// classes

class Usuario {
  public id: number = 0;
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  public getNome(): string {
    return this.nome;
  }
}


let usuario = new Usuario("Ivan");


// prop e metodos
// mod de acesso
// constructor
// this
// interfaces para classes
// herenca
