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

console.log(pares)
console.log(impares)