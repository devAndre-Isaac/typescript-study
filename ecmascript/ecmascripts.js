"use strict";
///let & const
let seraQuePode = "?"; // hoisting
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "colocarCasaco";
    console.log(acao);
}
const cpf = "1234567678";
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
        const def = "def";
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
//Arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(1, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(3, 313));
const saudacao = () => console.log("ola");
saudacao();
const falarCom = (pessoa) => console.log("ola", +pessoa);
falarCom("poe");
//this
function normalComThis() {
    console.log( /*this*/);
}
const normalComThisEspecial = normalComThis.bind("Abc");
normalComThisEspecial();
//this??
console.log(this);
const arrowComThis = () => console.log( /*this*/);
arrowComThis();
const arrowComThisEspecial = normalComThis.bind("Abc");
arrowComThis();
//parametro
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
contagemRegressiva(5);
//Rest &Spred Operator
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ["joao", "andre", "abel"];
const turmaB = ["fernando", "miguel", ...turmaA];
console.log(turmaB);
function returnArray(...args) {
    return args;
}
const numeros = returnArray(1, 2, 3, 4, 5);
console.log(numeros);
console.log(returnArray(...numbers));
//rest and spread (tupla)
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]} `);
}
tuplaParam2(...tupla);
// destructuring (array)
const caracteristicas = ["motor", 2021];
// const motor= caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(ano);
console.log(motor);
//destructuring(obj)
const item = {
    nome: "ssd",
    preco: 200,
    caracteristicas: {
        w: "Importado",
    },
};
const nomeItem = item.nome;
const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { w }, } = item;
console.log(n);
console.log(p);
console.log(w);
//template string
const usuarioId = "SuporteCoder";
const notificacoes = "9";
// const boasVindas = 'Boas Vindas' + usuarioId + 'Notificacoes:' + notificacoes
const boasvindas = `Boas vindas ${usuarioId},
                    Notificacoes: ${parseInt(notificacoes) > 9 ? "  +9" : notificacoes}
`;
console.log(boasvindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
//CallBack
function esperar3s(callback) {
    setTimeout(() => {
        callback("3s depois");
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
//Promise
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois promise");
        }, 3000);
    });
}
esperar3sPromise().then((dado) => console.log(dado));
fetch("https://swapi.co/api/people/1")
    .then((res) => res.json())
    .then((personagem) => personagem.filmes)
    .then((films) => fetch(films[0]))
    .then((resFilm) => resFilm.json())
    .then((filme) => console.log(filme.title))
    .catch((err) => console.log("Catch!!" + err));
//# sourceMappingURL=ecmascripts.js.map