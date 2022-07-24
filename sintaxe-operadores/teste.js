function comparaNumeros(num1, num2) {
	const firstsentence = criaPrimeiraFrase(num1, num2);
    const secondsentence = criaSegundaFrase(num1, num2);

    return `${firstsentence} ${secondsentence}`
    }

function criaPrimeiraFrase(num1, num2) {
	let equal= '';

	if (num1 !== num2) {
		equal = ' não';
	}

	return `Os números ${num1} e ${num2}${equal} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let resultado10 = 'menor';
	let resultado20 = 'menor';

const compara10 = soma>10;
const compara20 = soma>20;

	if (compara10) {
		resultado10 = 'maior';
    }

	if (compara20) {
		resultado20 = 'maior';
	}

	return `Sua soma é ${soma}, que é ${resultado10} do que 10 e ${resultado20} do que 20.`;
}

console.log(comparaNumeros(13, 14));