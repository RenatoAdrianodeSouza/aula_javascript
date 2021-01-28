const aspectos = `Alexandra`
const peso = 69
const altura = 1.67

const imc = (peso / (altura * altura))

if  ( imc < 18.5 ) {
    console.log (`Seu imc é ${imc}. Voce esta abaixo do seu peso.`)
} else if (( imc >= 18.6 ) && ( imc <=24.9)) {
    console.log (`Seu imc é ${imc}. Seu peso esta no ideal, continue assim.`)
}  else if (( imc >= 25 ) && ( imc <=29.9)) {
    console.log (`Seu imc é ${imc}. Você esta começando a passar do peso ideal, cuide-se.`)
} else if (( imc >= 30 ) && ( imc <=34.9)) {
    console.log (`Seu imc é ${imc}. Você já esta acima do peso, vá a um nutricionista, cuide-se.`)
} else if (( imc >= 35 ) && ( imc <=39.9)) {
    console.log (`Seu imc é ${imc}. Você já esta bem acima do peso, vá a um nutricionista e a um médico, cuide-se.`)
} else if ( imc >= 40 ) {
    console.log (`Seu imc é ${imc}. Você esta correndo risco de morte, vá urgentemente o um médico.`)
}