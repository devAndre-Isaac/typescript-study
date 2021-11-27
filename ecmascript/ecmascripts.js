var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
///let & const
var seraQuePode = "?"; // hoisting
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = "colocarCasaco";
    console.log(acao);
}
var cpf = "1234567678";
// cpf = '21243'
console.log(cpf);
var segredo = "externo";
function revelar() {
    var segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = "def";
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
//Arrow function
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(1, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(3, 313));
var saudacao = function () { return console.log("ola"); };
saudacao();
var falarCom = function (pessoa) { return console.log("ola", +pessoa); };
falarCom("poe");
//this
function normalComThis() {
    console.log( /*this*/);
}
var normalComThisEspecial = normalComThis.bind("Abc");
normalComThisEspecial();
//this??
console.log(this);
var arrowComThis = function () { return console.log( /*this*/); };
arrowComThis();
var arrowComThisEspecial = normalComThis.bind("Abc");
arrowComThis();
//parametro
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 3; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio >= 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva();
contagemRegressiva(5);
//Rest &Spred Operator
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['joao', 'andre', 'abel'];
var turmaB = __spreadArray(['fernando', 'miguel'], turmaA, true);
console.log(turmaB);
