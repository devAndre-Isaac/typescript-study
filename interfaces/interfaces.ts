interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar(sobrenome: string): void

}

function saudarComOla(pessoa: Humano){
    console.log('Olá' + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'joana'
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string){
        console.log('Ola meu nome é' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Skywalker')
// saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})

//Usando classes
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Ola meu nome é' + this.nome + ' ' + sobrenome)

    }
}
const meuCliente = new Cliente
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

//Interface funções

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function (base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t*a)
}
console.log(potencia(2, 3))