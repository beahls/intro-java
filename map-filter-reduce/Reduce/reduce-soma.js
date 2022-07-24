/*
Reduce
Some todos os números de um array
*/

meuArray = [1,2,3,4];

function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);
	return soma;
}

console.log(somaNumeros(meuArray));

