import { isPrime } from '../index';

test('isPrime', () => {
	// expect(isPrime(0)).toBe(false);
	// expect(isPrime(1)).toBe(false);
	expect(isPrime(2)).toBe(true);
	expect(isPrime(3)).toBe(true);
	expect(isPrime(4)).toBe(false);
	expect(isPrime(35)).toBe(false);
});
