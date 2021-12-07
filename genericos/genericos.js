function echo(obj) {
    return obj;
}
console.log(echo('Joao').lenght);
console.log(echo(25));
console.log(echo({ nome: 'Joao' }));
//Usando generics
function echoMelhorado(obj) {
    return obj;
}
console.log(echoMelhorado('Joao').length);
console.log(echoMelhorado(25));
console.log(echoMelhorado({ nome: 'Joao' }).nome);
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
imprimir(['1', '2', '3']);
imprimir([{
        nome: 'Fulano',
        idade: 3
    }]);
imprimir([{
        nome: 'Fulano',
        idade: 3
    }]);
var chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics
var OperacaoBinaria = /** @class */ (function () {
    function OperacaoBinaria(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    OperacaoBinaria.prototype.executar = function () {
        return this.operando1 + this.operando2;
    };
    return OperacaoBinaria;
}());
console.log(new OperacaoBinaria('Bom', 'dia').executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria('Opa', 7).executar());
console.log(new OperacaoBinaria({}, {}).executar());
