class Data {
    //Público por padrão
    dia: number
    public mes: number
    ano: number 

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}


const aniversario = new Data(3,11, 1202)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os ()
casamento.ano = 2017
console.log(casamento)


class DataEsperta {
    //Público por padrão
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
        this.dia = dia
    }
}


const aniversario2 = new DataEsperta(3,11, 1202)
aniversario.dia = 4
console.log(aniversario2.dia)
console.log(aniversario2)

const casamento2 = new DataEsperta // posso omitir os ()
casamento2.ano = 2017
console.log(casamento2)