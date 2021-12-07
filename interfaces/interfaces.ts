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