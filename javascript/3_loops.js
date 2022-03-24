//*TODO: CRIE UM OBJETO QUE CONTENHA COMO PROPRIEDADES OS INTEGRANTES DA SUA BANDA FAVORITA
//*TODO: CRIE UM LOOP QUE MOSTRE OS NOMES DOS INTEGRANTES, NÃO OS PAPÉIS

const integrantes = {
  vocalista: 'Ozzy',
  guitarrista: 'Tony Iommi',
  baixista: 'Geezer Butler',
  baterista: 'Bill Ward',
};

for (let integrante in integrantes)
  console.log(`O ${integrante} do Black Sabbath é o ${integrantes[integrante]}`);

// * Ozzy, Tony Iommi, Geezer Butler, Bill Ward
