import memoize from 'lodash.memoize';
const hasDecimals = (value: number) => value % 1 !== 0;

const isPrime = memoize((value: number) => {
	let counter = 0;

	for (let index = 1; index <= value / 2; index++) {
		if (value % index === 0) {
			counter = counter + 1;
		}

		if (counter > 2) {
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
