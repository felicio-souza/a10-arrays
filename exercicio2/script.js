
const listaNumeros = [1, 9, 7, 3];
const listaPalavras = ["maça", "casa", "árvore","criança" ];
const listaDiversas = [1, "bola", 3, true];

//Quantidade de intens em cada array
console.log("Quantidade de itens são: " + listaNumeros.length)
console.log("Quantidade de itens são: " + listaPalavras.length)
console.log("Quantidade de itens são: " + listaDiversas.length)

// Impressão : priemiro item do primeiro array,
//segundo item do segundo array e terceiro item do terceiro array

console.log("O primeiro iten é: " + listaNumeros[0])
console.log("O segundo iten é: " + listaPalavras[1])
console.log("O terceiro iten é: " + listaDiversas[2])

// Imprimir expressoes boleana atraves do metodo includes()
console.log("Dentro do array inclui o inten 3 ? " + listaNumeros.includes(3))
console.log("Dentro do array inclui o inten \"casa\" ? " + listaDiversas.includes("casa"))