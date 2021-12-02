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

//Desafio Classe

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0){
        this.nome = nome
    }
     precoComDesconto(): number{
        return this.preco * (1 - this.desconto)
    }
     resumo(): string {
        return `${this.precoComDesconto()}`
    }
}

const prod1 = new Produto('acer', 2)
prod1.nome = 'dell'
console.log(prod1)
console.log(prod1.nome)

const prod2 = new Produto('apple', 2000, 5)
prod2.nome = 'xiaomi'
console.log(prod2)
console.log(prod2.nome)

const prod3 = new Produto('Caderno', 18.80, 4.20)
console.log(prod2.resumo())

// herança
class Carro{
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number){
    }

    protected alterarVelocidade(delta: number): number {
        
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima
       
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
        return this.velocidadeAtual
    }

    public acelerar(): number{
        return this.alterarVelocidade(5)
    }
    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('ford', 'ka', 185)

Array(50).fill(0).forEach(()=>{carro1.acelerar()})
console.log(carro1.acelerar())

Array(20).fill(0).forEach(()=>{carro1.frear()})
console.log(carro1.frear())

//simular erros
// carro1.velocidadeAtual = 300
// console.log('atual' + carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log('maxima' + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual' + carro1.velocidadeAtual)

// herança extends and super

class Ferrari extends Carro{
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }
    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('f40', 320)
console.log(`${f40.marca} ${f40.modelo}`)

console.log(f40.acelerar())
console.log(f40.frear())


//getter and setters

class Pessoa{
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }
    set idade(valor: number){
        if(valor>= 0 && valor<= 120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -4
console.log(pessoa1.idade)
