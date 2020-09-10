module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		"plugin:flowtype/recommended"
	],
	plugins: ['react', 'flowtype'],
	rules: {
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
				singleQuote: false,
				tabWidth: 2,
				useTabs: true,
				semi: true,
				trailingComma: "all",
				jsxBracketSameLine: true,
				bracketSpacing: false,
			},
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'no-var': 'warn',
		eqeqeq: 'warn',
	},
};
