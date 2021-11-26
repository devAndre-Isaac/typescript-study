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
