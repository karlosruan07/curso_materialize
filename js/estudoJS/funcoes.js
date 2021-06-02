
var valor1 = 1
var valor2 = 2

function soma(){
    console.log(valor1 + valor2)
}


function subtracao(valorA, valorB){
    this.valorA = valorA
    this.valorB = valorB

    console.log(valorA - valorB)
}

subtracao(5, 1)
