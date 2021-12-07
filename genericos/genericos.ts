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
