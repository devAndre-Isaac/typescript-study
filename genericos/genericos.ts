function echo(obj: any){
    return obj
}

console.log(echo('Joao').lenght)
console.log(echo(25))
console.log(echo({nome: 'Joao'}))

//Usando generics
function echoMelhorado<T>(obj: T): T{
    return obj
}
console.log(echoMelhorado('Joao').length)
console.log(echoMelhorado<number>(25))
console.log(echoMelhorado({nome: 'Joao'}).nome)

//Generics disponiveis na API
const avaliacoes: Array<number> = [10, 9, 7]
avaliacoes.push(8.4)
// avaliacoes.push('11.4')
console.log(avaliacoes)

// Array

function imprimir<T>(args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['1', '2', '3'])
imprimir<{nome: string, idade: number}>([{
    nome: 'Fulano',
    idade: 3
}])


type Aluno = {nome: string, idade: number}
imprimir<Aluno>([{
    nome: 'Fulano',
    idade: 3
}])

// Tipo usando generics
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics

class OperacaoBinaria {
    constructor(public operando1: any, public operando2: any){}
    executar(){
        return this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria('Bom', 'dia'). executar())
console.log(new OperacaoBinaria(3, 7). executar())
console.log(new OperacaoBinaria('Opa', 7). executar())
console.log(new OperacaoBinaria({}, {}). executar())





