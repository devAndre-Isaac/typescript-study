function logarClasse(construtor: Function){
    console.log(construtor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean){
    return valor? logarClasse : null
}

function decorator(obj: {a:string, b: number}){
    return function(construtor: Function): void{
        console.log(obj.a + ' ' + obj.b)
    }
}

// @logarClasse
// @decorator({a: 'test', b: 2} )
// @logarClasseSe(false)
@logarObjeto
class Eletrodomestico {
    constructor(){
        console.log('novo')
    }
}

type Construtor = {new(...args: any[]): {}}
function logarObjeto(construtor: Construtor){
    return class extends construtor {
        constructor(...args: any[]){
            console.log('Antes..')
            super(...args)
            console.log('Depois...')
        }
    }
}