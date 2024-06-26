/*CRIAR UM ALGORITMO QUE LEIA UMA LISTA E RETORNE DUAS LISTAS NOVAS*/ 

let listaNumeros = [1,2,3,4,5,6,7,8,9];
let pares = [];
let impares = [];

/*function verifca(listaNumeros){
    while(listaNumeros[i] <10){
        if(listaNumeros[i]%2 == 0){
            pares.push(listaNumeros[i]);
        }
        else{
            impares.push(listaNumeros[i])
        }
        i++;
    }
}*/

for(let numero of listaNumeros){
    if(numero % 2 ==0){
        pares.push(numero)
    }
    else{
        impares.push(numero)
    }
}


/* com WHILE
let i = 0;
while(listaNumeros[i] <10){
    if(listaNumeros[i]%2 == 0){
        pares.push(listaNumeros[i]);
    }
    else{
        impares.push(listaNumeros[i])
    }
    i++;
}*/

console.log(pares);
console.log(impares);

/*COM UMA LISTA DE ALUNOS (OBJETO)  VAMOS PERCORRER CADA ALUNO E TRAER A MEDIA DA NOTA E MOSTRA O NOME DO ALUNO E SUA MEDIA*/ 

const listaAlunos = [
    {nome:"Huguinho",nota:[5,7]},
    {nome:"Zezinho", nota:[6,9]},
    {nome: "Luizinho", nota: [7,8]}
]
for(aluno of listaAlunos){
    let media = ((aluno.nota[0]+aluno.nota[1])/2);
    console.log(`A media do aluno ${aluno.nome} é ${media}`)
}

//algoritmo que falca um sorteio de um bingo

const sorteio = [];

while(sorteio.length < 6){
    let numero1 = Math.ceil(Math.random() * 60);
    if(!sorteio.includes(numero1)){
        sorteio.push(numero1);
    }
}
sorteio.sort((a,b)=>a-b);
console.log(sorteio);

//DESESTRUTURAÇÃO

const usuario = {
    nome:"Fiap", 
    local: "São Paulo", 
    idade: 20
}

//SEM desestruturação
console.log(`Nome e local: ${usuario.nome}, ${usuario.local}`)

//COM desestruturação
let{nome,local} = usuario;
console.log(`Nome e Local: ${nome}, ${local}`)

//ARROW Function
let itens = ["fusca", "belina", "gurgel", "brasilia", "kombi"];
itens.forEach(function(item){
    console.log(item)
})

let itens1 = ["fusca-1", "belina-1", "gurgel-1", "brasilia-1", "kombi-1"];
itens1.forEach(item1 => console.log(item1))