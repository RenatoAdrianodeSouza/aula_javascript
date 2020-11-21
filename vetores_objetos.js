    // Crie um programa com um objeto para armazenar dados de
// um programador como aspectos, idade e tecnologias que trabalha.
// Um programador pode trabalhar com varias tecnologias, por
// isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo aspectos
// e especialidade, use as tecnologias abaixo:

const programador = {
    aspectos: `Renato`,
    idade: 52,
    tecnologias: [
        {
            aspectos: `C++`,
            especialidade: `Desktop`
        },
        {
            aspectos: `Python`,
            especialidade: `Data science`
        },
        {
            aspectos: `JavaScript`,
            especialidade: `Web/Mobile`
        }
    ]
}

console.log(`O programador ${programador.aspectos} tem ${programador.idade} e usa a
tecnologia ${programador.tecnologias[0].aspectos} com especialidade em ${programador.tecnologias[0].especialidade}.`);