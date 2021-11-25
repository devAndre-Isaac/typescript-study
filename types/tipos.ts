let idade: number = 27;

idade = 27.2;
console.log(idade);

let possuiHobbies: boolean = false;

//possuiHobbies = 1

console.log(possuiHobbies);

let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// console.log(typeof minhaIdade)]

//aray
let hobbies: any[] = ["cozinha", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];

console.log(hobbies);

//tuplas
let endereco: [string, number] = ["av principal", 99];
console.log(endereco);

endereco = ["a", 0];

//enums
enum Cor {
  Cinza, ///0
  Verde = 100,
  Azul = 2,
  Laranja, //2
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// let nome = "andre";
//any
let carro: any = "BMW";
console.log(carro);
carro = {
  marca: "bmw",
  ano: 2019,
};
console.log(carro);

//funçoes
function retornaMeuNome(): string {
  return nome;
}
console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 2));

//tipo função
const test = function (a: number, b: number): boolean {
  return false;
};

let calculo: (numeroA: number, numeroB: number) => number;
// calculo = digaOi
// calculo()

calculo = multiplicar;
console.log(calculo(5, 6));

//objetos

let usuario: { nome: string; idade: number } = {
  nome: "joao",
  idade: 27,
};

console.log(usuario);

// usuario = {}

// usuario = {
//     name: 'maria',
//     age: 12
// }

usuario = {
  nome: "Tide",
  idade: 22,
};

//Alias tipos personalizados

type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
}

let funcionario: Funcionario = {
  supervisores: ["Ana", "Feranndo"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto Normal";
    } else {
      return "fora do horario";
    }
  },
};

let funcionario2: Funcionario = {
  supervisores: ["Ana", "Feranndo"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return "Ponto Normal";
    } else {
      return "fora do horario";
    }
  },
};

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(9))


//Union types

let nota: number | string = 10

console.log(`Minha nota é ${nota}`)

nota = '10'

console.log(`Minha nota é ${nota}`)

// check types

let valor  = 30

if(typeof valor === 'number'){
  console.log('E um number')
}else{
  console.log( typeof valor)
}


// never type

function falha(msg: string): never{
  // while(true){} 
  throw new Error(msg)
}
const produto = {
  nome: 'Sabao',
  preco: 4,
  validarProduto(){
    if(!this.nome || this.nome.trim().length === 0){
      falha('Precisa ter um nome')
    }
    if(this.preco <= 0){
      falha('preço invalido')
    }
  }
}

produto.validarProduto()


let altura = 12
//  null
let alturaOpcional: number | null = 12

alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Andre',
  tel1: '1234',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

//optional values

let podeSerNull = null // tipo any!!
podeSerNull = 12
console.log(podeSerNull)
podeSerNull = 'abc'
console.log(podeSerNull)


// challenge
// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor: any) {
//       this.saldo += valor
//   }
// }

// let correntista = {
//   nome: 'Ana Silva',
//   contaBancaria: contaBancaria,
//   contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

// challenge  ok
type Conta = {
  saldo: number
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  contaBancaria: Conta,
  contatos: string[]
}

let contaBancaria1: Conta = {
  saldo: 3456,
  depositar(valor) {
      this.saldo += valor
  }
}

let correntista1 = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria1,
  contatos: ['34567890', '98765432']
}

correntista1.contaBancaria.depositar(3000)
console.log(correntista1)

