import memoize from 'lodash.memoize';

const isPrime = memoize((num: number) => {
	const value = Math.abs(num);
	let counter = 0;

	if (value < 2) {
		return false;
	}

	for (let index = 1; index <= value; index++) {
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

export { isPrime, getRandomItem };
