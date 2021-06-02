var lista_semana = ['Domingo', 'segunda', 'terça', 'Quarta', 'Quinta', 'Sexta','Sábado']
const data_hora = new Date()

console.log(data_hora.getDate())//pega o dia atual do mês
console.log(data_hora.getDay())//pega o dia da semana (0-6)
console.log(data_hora.getMonth())//pega o mês (0-11)
console.log(data_hora.getFullYear())//retorna o ano atual

console.log(data_hora.getHours())//retorna a hora atual
console.log(data_hora.getMinutes())
console.log(data_hora.getSeconds())


console.log(`São exatamente ${data_hora.getHours()}:${data_hora.getMinutes()}:${data_hora.getSeconds()}`)

console.log(`Hoje é ${lista_semana[data_hora.getDay()]} - ${data_hora.getDate()}/${data_hora.getMonth()+1}/${data_hora.getFullYear()}`)





