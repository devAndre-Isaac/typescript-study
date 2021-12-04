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
// herança
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
// herança extends and super
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(modelo, velocidadeMaxima) {
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this;
    }
    Ferrari.prototype.acelerar = function () {
        return this.alterarVelocidade(20);
    };
    Ferrari.prototype.frear = function () {
        return this.alterarVelocidade(-15);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('f40', 320);
console.log("".concat(f40.marca, " ").concat(f40.modelo));
console.log(f40.acelerar());
console.log(f40.frear());
//getter and setters
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -4;
console.log(pessoa1.idade);
// Atributos e metodos estáticos
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.areacirc = function (raio) {
        return this.PI * raio * raio;
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areacirc(4))
// const m2 = new Matematica()
// console.log(m1.areacirc(4))
console.log(Matematica.areacirc(4));
//Classe Abstrata
var Calculo = /** @class */ (function () {
    function Calculo() {
        this.resultado = 0;
    }
    Calculo.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculo;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t + a; });
    };
    return Soma;
}(Calculo));
var Multiplicar = /** @class */ (function (_super) {
    __extends(Multiplicar, _super);
    function Multiplicar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicar.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t * a; });
    };
    return Multiplicar;
}(Calculo));
var c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
//Construtor privado & Singleton
var Unico = /** @class */ (function () {
    function Unico() {
    }
    Unico.getInstance = function () {
        return Unico.instance;
    };
    Unico.prototype.agora = function () {
        return new Date;
    };
    Unico.instance = new Unico;
    return Unico;
}());
// const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente Leitura
var Aviao = /** @class */ (function () {
    function Aviao(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    return Aviao;
}());
var turboHelice = new Aviao('Tu-114', 'PT-4d');
// turboHelice.modelo ='DC-8'
// turboHelice.prefixo ='PT-DEF'
console.log(turboHelice);
