function saudarComOla(pessoa) {
    console.log('Olá' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'joana';
}
var pessoa = {
    nome: 'Joao',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 });
