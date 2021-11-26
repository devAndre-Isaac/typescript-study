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

for(var i = 0; i<10; i++){
    console.log(i)
}

// console.log(i)