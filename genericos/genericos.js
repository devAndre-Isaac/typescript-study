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
