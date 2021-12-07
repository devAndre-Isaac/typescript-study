var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function echo(obj) {
    return obj;
}
console.log(echo("Joao").lenght);
console.log(echo(25));
console.log(echo({ nome: "Joao" }));
//Usando generics
function echoMelhorado(obj) {
    return obj;
}
console.log(echoMelhorado("Joao").length);
console.log(echoMelhorado(25));
console.log(echoMelhorado({ nome: "Joao" }).nome);
//Generics disponiveis na API
var avaliacoes = [10, 9, 7];
avaliacoes.push(8.4);
// avaliacoes.push('11.4')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(function (elemento) { return console.log(elemento); });
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(["1", "2", "3"]);
imprimir([
    {
        nome: "Fulano",
        idade: 3
    },
]);
imprimir([
    {
        nome: "Fulano",
        idade: 3
    },
]);
var chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// Class com Generics
var OperacaoBinaria = /** @class */ (function () {
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    return OperacaoBinaria;
}());
// console.log(new OperacaoBinaria('Bom', 'dia'). executar())
// console.log(new OperacaoBinaria(3, 7). executar())
// console.log(new OperacaoBinaria('Opa', 7). executar())
// console.log(new OperacaoBinaria({}, {}). executar())
var SomaBinaria = /** @class */ (function (_super) {
    __extends(SomaBinaria, _super);
    function SomaBinaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomaBinaria.prototype.executar = function () {
        return this.operando1 + this.operando2;
    };
    return SomaBinaria;
}(OperacaoBinaria));
console.log(new SomaBinaria(2, 3).executar());
var DiferencaEntreDatas = /** @class */ (function (_super) {
    __extends(DiferencaEntreDatas, _super);
    function DiferencaEntreDatas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiferencaEntreDatas.prototype.getTime = function (data) {
        var dia = data.dia, mes = data.mes, ano = data.ano;
        return new Date("".concat(mes, "/").concat(dia, "/").concat(ano)).getTime();
    };
    DiferencaEntreDatas.prototype.executar = function () {
        var t1 = this.getTime(this.operando1);
        var t2 = this.getTime(this.operando2);
        var diferenca = Math.abs(t1 - t2);
        var dia = 1000 * 60 * 60 * 24;
        return "".concat(Math.ceil(diferenca / dia), " dia(s)");
    };
    return DiferencaEntreDatas;
}(OperacaoBinaria));
var d1 = new Data(1, 2, 2020);
var d2 = new Data(4, 2, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
//Desafio Classes com Generics
var Fila = /** @class */ (function () {
    function Fila() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.fila = args;
    }
    Fila.prototype.entrar = function (elemento) {
        this.fila.push(elemento);
    };
    Fila.prototype.proximo = function () {
        if (this.fila.length >= 0 && this.fila[0]) {
            var primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    };
    Fila.prototype.imprimir = function () {
        console.log(this.fila);
    };
    return Fila;
}());
var fila = new Fila("Gui", "Andre", "Ana", "Lu");
fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
