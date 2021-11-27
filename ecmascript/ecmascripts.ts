///let & const
let seraQuePode: string = "?"; // hoisting
console.log(seraQuePode);

let estaFrio = true;

if (estaFrio) {
  let acao = "colocarCasaco";
  console.log(acao);
}

const cpf: string = "1234567678";

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
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(1, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(3, 313));

const saudacao = () => console.log("ola");

saudacao();

const falarCom = (pessoa: string) => console.log("ola", +pessoa);
falarCom("poe");

//this

function normalComThis() {
  console.log(/*this*/);
}
const normalComThisEspecial = normalComThis.bind("Abc");
normalComThisEspecial();

//this??
console.log(this)
const arrowComThis = () => console.log(/*this*/)
arrowComThis()

const arrowComThisEspecial = normalComThis.bind("Abc");
arrowComThis();

//parametro

function contagemRegressiva(inicio: number = 3, fim: number = inicio- 5):void{
 console.log(inicio)
 while(inicio >= 0){
   inicio--
   console.log(inicio)
 }
 console.log('Fim')
}
contagemRegressiva()
contagemRegressiva(5)

//Rest &Spred Operator

const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers))

const turmaA: string [] = ['joao', 'andre', 'abel']
const turmaB: string[] = ['fernando', 'miguel', ...turmaA]

console.log(turmaB)