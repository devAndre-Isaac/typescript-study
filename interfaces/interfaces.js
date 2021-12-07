function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'joana';
}
var pessoa = {
    nome: 'Joao',
    idade: 27,
    saudar: function (sobrenome) {
        console.log('Ola meu nome é' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');
// saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})
//Usando classes
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log('Ola meu nome é' + this.nome + ' ' + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente;
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce(function (t, a) { return t * a; });
};
console.log(potencia(2, 3));
