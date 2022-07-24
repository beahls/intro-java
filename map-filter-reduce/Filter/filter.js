/* Filtre e retorne todos os números pares de um array.*/

meuArray = [1,2,3,4,5,6,7,8,9,0];

function filtraPares(array) {
	if (!array || !array.length) return;
	const filteredArr = array.filter((item) => item % 2 === 0);
	return filteredArr;
}

console.log("Os números pares são:",filtraPares(meuArray));

function filtraImpares(array) {
	if (!array || !array.length) return;
	const filteredArr = array.filter((item) => item % 2 !== 0);
	return filteredArr;
}

console.log("Os números impares são:",filtraImpares(meuArray));