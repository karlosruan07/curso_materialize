/*
var var_teste = 'Ruan'

function teste() {
    var var_teste = 'carlos'
    console.log(var_teste)
}

console.log(var_teste)
teste() 

let let_teste = 'Ruan'

function teste2() {
    let let_teste = 'carlos'
    console.log(let_teste)
}

console.log(let_teste)
teste2()*/

/*var a = 1
var b = 2

if(a === 1){
    var a = 11
    let b =22 //nos escopos de if o let é local
    
    //console.log(a)
    //console.log(b)
}
console.log(a)
console.log(b)*/

var a = 1
var cont = 1
for(cont; cont <=5; cont++){
    var a = 11
    console.log(a)    
}
console.log('=-=-=-=-')
console.log(a)