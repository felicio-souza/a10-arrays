// Manipulando os arrays
//array originais
const listaNumeros = [1, 9, 7, 3];
const listaPalavras = ["maça", "casa", "árvore","criança" ];
const listaDiversas = [1, "bola", 3, true];

//Copia dos arrays

const listaNumerosCopia = listaNumeros;
const listaPalavrasCopia = listaPalavras;
const listaDiversasCopia = listaDiversas;

//Adiconando itens 

console.log(listaNumeros);
listaNumerosCopia.push("number");
console.log(listaNumerosCopia);

//Removendo Itens
console.log(listaPalavras);
listaPalavrasCopia.pop();
console.log(listaPalavrasCopia);

console.log(listaDiversas);
listaDiversasCopia.splice(1, 1);
console.log(listaDiversasCopia);