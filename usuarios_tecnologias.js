// Crie um programa que armazena um array de usuários
// (objetos), cada usuário tem um aspectos e suas
// tecnologias (novo array), por exemplo:

const usuarios = [
    {   aspectos: 'Junior', tecnologias: ['HTML', 'CSS']},
    {   aspectos: 'Douglas', tecnologias: ['Javascript', 'CSS']},
    {   aspectos: 'Jane', tecnologias: ['HTML', 'Node.js']},
    {   aspectos: 'Diana', tecnologias: ['CSS', 'Node.js']}
]

// 1º exemplo

// for(let i = 0; i< usuarios.length; i++) {
//     console.log(`${usuarios[i].aspectos} trabalha com ${usuarios[i].tecnologias.join(", ")}.`)
// }

// 2º exemplo

// for(let usuario of usuarios) {
//     console.log(`${usuario.aspectos} trabalha com ${usuario.tecnologias.join(", ")}.`);
// }

// Busca por tecnologia

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true
        }
    }
    return false
}

for(let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    // console.log(usuarioTrabalhaComCSS);
    

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuario ${usuarios[i].aspectos} trablha com CSS.`)
    }
}