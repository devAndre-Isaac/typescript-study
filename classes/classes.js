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
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(3, 11, 1202);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
var casamento = new Data; // posso omitir os ()
casamento.ano = 2017;
console.log(casamento);
var DataEsperta = /** @class */ (function () {
    //Público por padrão
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
    }
    return DataEsperta;
}());
var aniversario2 = new DataEsperta(3, 11, 1202);
aniversario.dia = 4;
console.log(aniversario2.dia);
console.log(aniversario2);
var casamento2 = new DataEsperta; // posso omitir os ()
casamento2.ano = 2017;
console.log(casamento2);
//Desafio Classe
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome;
    }
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.prototype.resumo = function () {
        return "".concat(this.precoComDesconto());
    };
    return Produto;
}());
var prod1 = new Produto('acer', 2);
prod1.nome = 'dell';
console.log(prod1);
console.log(prod1.nome);
var prod2 = new Produto('apple', 2000, 5);
prod2.nome = 'xiaomi';
console.log(prod2);
console.log(prod2.nome);
var prod3 = new Produto('Caderno', 18.80, 4.20);
console.log(prod2.resumo());
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('ford', 'ka', 185);
Array(50).fill(0).forEach(function () { carro1.acelerar(); });
console.log(carro1.acelerar());
Array(20).fill(0).forEach(function () { carro1.frear(); });
console.log(carro1.frear());
//simular erros
// carro1.velocidadeAtual = 300
// console.log('atual' + carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('maxima' + carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log('atual' + carro1.velocidadeAtual)
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(20);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('Ferrari', 'f40', 320);
console.log("".concat(f40.marca, " ").concat(f40.modelo));
console.log(f40.acelerar());
console.log(f40.frear());
