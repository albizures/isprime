import { hasDecimals, isPrime } from '../index';

test('hasDecimals', () => {
	expect(hasDecimals(1.3)).toBe(true);
	expect(hasDecimals(3.5)).toBe(true);
	expect(hasDecimals(1)).toBe(false);
	expect(hasDecimals(3)).toBe(false);
});

test('isPrime', () => {
	expect(isPrime(0)).toBe(false);
	expect(isPrime(1)).toBe(false);
	expect(isPrime(2)).toBe(true);
	expect(isPrime(3)).toBe(true);
	expect(isPrime(4)).toBe(false);
	expect(isPrime(35)).toBe(false);
});
