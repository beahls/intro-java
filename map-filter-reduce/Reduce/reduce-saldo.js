/*
Reduce
Crie uma função que recebe uma lista de preços
e um número representando o saldo disponível.
Calcule qual será o saldo final após subtrair 
todos os preços da lista enviada.
*/
lista = [
	{
		preco: 2,
		item: 'maçã',
	},
	{
		preco: 30,
		item: 'roupa',
	},
	{
		preco: 25,
		item: 'carne',
	},
];

const saldo = 100;

function calculaSaldo(saldo, lista) {
	return lista.reduce(function(prev,curr){
		console.log({prev});
		console.log({curr});
		return prev-curr.preco;
	}, saldo);
	}
		
console.log(calculaSaldo(saldo, lista));