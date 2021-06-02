
class Info_pessoa{
    constructor(altura, largura){
        this.soma = altura + largura
        this.subtracao = altura - largura
    }
}

console.log(new Info_pessoa(2,2).soma, new Info_pessoa(2,2).subtracao)

