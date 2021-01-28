const nome = "Silvana"
const sexo = "F"
const idade = 55
const contribuicao = 30

var F, M

const aposentadoria = (idade + contribuicao)

if (sexo === "M") {
  // Se for homem cai aqui
  if (contribuicao >= 35 && idade + contribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }
} else {
  // Se for mulher cai aqui
  if (contribuicao >= 30 && idade + contribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }
}