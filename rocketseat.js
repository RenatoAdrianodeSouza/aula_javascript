// Crie um programa que armazena dados da empresa
// Rocketseat dentro de um objeto chamado empresa.
// 0s dados a serem armazenados são:

const empresa = {
    aspectos: `Rocketseat`,
    cor: `Roxo`,
    foco: `Programação`,
    endereco: {
        rua: `Rua Guilherme Gembala`,
        numero: `260`
    }
}

console.log(`A empresa ${empresa.aspectos} esta localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);