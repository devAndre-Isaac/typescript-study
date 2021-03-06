"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : null;
}
function decorator(obj) {
    return function (construtor) {
        console.log(obj.a + " " + obj.b);
    };
}
function logarObjeto(construtor) {
    return class extends construtor {
        constructor(...args) {
            console.log("Antes..");
            super(...args);
            console.log("Depois...");
        }
    };
}
// @logarClasse
// @decorator({a: 'test', b: 2} )
// @logarClasseSe(false)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo");
    }
};
Eletrodomestico = __decorate([
    logarObjeto,
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico().imprimir();
eletro.imprimir() && eletro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: true,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão!");
            }
        }
    };
}
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(120102);
cc.sacar(5000);
console.log(cc.getSaldo());
console.log(cc.getSaldo());
//Object.freeze()
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropiedade) {
    delete alvo[nomePropiedade];
    Object.defineProperty(alvo, nomePropiedade, {
        get: function () {
            return alvo["_" + nomePropiedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo Inválido");
            }
            else {
                alvo["_" + nomePropiedade] = valor;
            }
        },
    });
}
function paramInfo(alvo, nomeMetodo, indiceParams) {
    console.log(`Alvo:  ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice do Parâmetro: ${indiceParams}`);
}
//# sourceMappingURL=decorators.js.map