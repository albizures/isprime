import memoize from 'lodash.memoize';
const hasDecimals = (value: number) => value % 1 !== 0;
const digitsSum = (value: number) =>
	value
		.toString()
		.split('')
		.reduce((sum, value) => {
			return sum + Number(value);
		}, 0);

const isPrime = memoize((value: number) => {
	if (value === 0 || value === 1) {
		return false;
	}

	if (value === 2 || value === 3 || value === 5 || value === 7) {
		return true;
	}

	if (value % 2 === 0) {
		return false;
	}

	if (digitsSum(value) % 3 === 0) {
		return false;
	}

	let squareRoot = value;

	while (!hasDecimals(Math.sqrt(squareRoot))) {
		squareRoot = Math.sqrt(squareRoot);
	}

	for (let index = 2; index < squareRoot; index++) {
		if (isPrime(index) && squareRoot % index === 0) {
			return false;
		}
	}

	return true;
});

const getRandomItem = <T>(items: T[]): T => {
	const index = Math.floor(Math.random() * items.length);
	return items[index];
};

export { isPrime, getRandomItem, hasDecimals };
