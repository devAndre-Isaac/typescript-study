"use strict";
exports.__esModule = true;
var idade = 27;
idade = 27.2;
console.log(idade);
var possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)]
//aray
var hobbies = ["cozinha", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
//tuplas
var endereco = ["av principal", 99];
console.log(endereco);
endereco = ["a", 0];
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
var nome = "andre";
//any
var carro = "BMW";
console.log(carro);
carro = {
    marca: "bmw",
    ano: 2019
};
console.log(carro);
//funçoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 2));
//tipo função
var test = function (a, b) {
    return false;
};
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
var usuario = {
    nome: "joao",
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'maria',
//     age: 12
// }
usuario = {
    nome: "Tide",
    idade: 22
};
var funcionario = {
    supervisores: ["Ana", "Feranndo"],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return "Ponto Normal";
        }
        else {
            return "fora do horario";
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

