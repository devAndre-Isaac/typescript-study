let canal: string = 'Gaveta'

let inscritos: number = 610234

// canal = inscritos

console.log(canal)

let nome = 'pedro'; /// variavel redeclarada

console.log(nome);

(function(){
    let nome: string =  'Ana'
    console.log(nome)
})

function soma(a: any, b: any){
    return a+b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saldar(isManha: boolean): string{
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia'
    }else{
        saudacao = 'Boa vida'
    }
    return saudacao
}