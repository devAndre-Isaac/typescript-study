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


class ContaCorrente{
    @naoNegativo
    private saldo: number
    
    constructor(saldo: number){
        this.saldo = saldo
    }
    @congelar
    sacar(@paramInfo valor: number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }else{
            return false
        }
    }
    @congelar
    getSaldo(){
        return this.saldo
    }
}


const cc = new ContaCorrente(120102)
cc.sacar(5000)
console.log(cc.getSaldo())
console.log(cc.getSaldo())

//Object.freeze()
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomePropriedade)
    descritor.writable = false
}

function naoNegativo(alvo: any, nomePropiedade: string){
    delete alvo[nomePropiedade]
    Object.defineProperty(alvo, nomePropiedade,{
        get: function(): any {
            return alvo["_" + nomePropiedade]
        },
        set: function(valor: any): void{
            if(valor< 0){
                throw new Error('Saldo Inválido')
            }else{
                alvo["_" + nomePropiedade] = valor
            }
        }
    })
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParams: number){
    console.log(`Alvo:  ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Índice do Parâmetro: ${indiceParams}`)

}