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
