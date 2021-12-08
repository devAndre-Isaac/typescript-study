// @logarClasse
// @decorator({a: 'test', b: 2} )
@logarClasseSe(false)
class Eletrodomestico {
    constructor(){
        console.log('novo')
    }
}

function logarClasse(construtor: Function){
    console.log(construtor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean){
    return valor? logarClasse : null
}

function decorator(obj: {a:string, b: number}){
    return function(constructor: Function): void{
        console.log(obj.a + ' ' + obj.b)
    }
}