let idade: number = 27

idade = 27.2
console.log(idade)

let possuiHobbies: boolean = false

//possuiHobbies = 1

console.log(possuiHobbies)

let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = '27'
// console.log(typeof minhaIdade)]


//aray
let hobbies: any[] = [ "cozinha", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]

console.log(hobbies)

//tuplas
let endereco: [string, number] = ["av principal", 99]
console.log(endereco)

endereco = ['a', 0]

//enums
enum Cor {
    Cinza, ///0
    Verde = 100,
    Azul = 2,
    Laranja, //2
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

let nome = 'andre'
//any
let carro: any = 'BMW'
console.log(carro)
carro = {
    marca: 'bmw',
    ano: 2019
}
console.log(carro)

//funçoes
function retornaMeuNome(): string{
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void{
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

console.log(multiplicar(2, 2))