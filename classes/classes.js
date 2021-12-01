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
