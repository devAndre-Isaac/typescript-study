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
