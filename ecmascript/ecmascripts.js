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
