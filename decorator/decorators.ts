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
interface Eletrodomestico{
    imprimir?(): any
}
// @logarClasse
// @decorator({a: 'test', b: 2} )
// @logarClasseSe(false)
@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor(){
        console.log('novo')
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico().imprimir()
eletro.imprimir() && eletro.imprimir()


// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T){
    return class extends construtor {
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error('Sem permissão!')
            }
        }
    }
}