module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'prettier',
		'prettier/vue',
		'plugin:nuxt/recommended',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['off'],
	},
};
