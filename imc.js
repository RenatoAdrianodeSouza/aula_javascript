const aspectos = `Alexandra`
const peso = 70
const altura = 1.60

const imc = (peso / (altura * altura))

if  ( imc > 25 ) {
    console.log (`Seu imc é ${imc}. Voce esta acima do seu peso ideal`)
} else if (( imc >= 18 ) && ( imc <=25)) {
    console.log (`Seu imc é ${imc}. Continue assim`)
} else if ( imc < 18 ) {
    console.log (`Seu imc é ${imc}. Se alimente melhor você esta abaixo do peso`)
}