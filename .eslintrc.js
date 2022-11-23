require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/essential",
		"@vue/eslint-config-typescript",
		"plugin:prettier/recommended",
		"plugin:storybook/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint", "prettier", "import"],
	rules: {
		"@typescript-eslint/no-unused-vars": ["error", { args: "all", argsIgnorePattern: "^_" }],
		"newline-per-chained-call": ["warn"],
		"newline-before-return": "error",
		"import/order": [
			"error",
			{
				groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
				pathGroupsExcludedImportTypes: ["internal"],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				"newlines-between": "never",
			},
		],
		"import/no-unresolved": "error",
		"prettier/prettier": "error",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
	},
	ignorePatterns: [
		"*.min.*",
		"*.d.ts",
		"dist",
		"LICENSE*",
		"output",
		"package.json",
		"coverage",
		"dist",
		"package-lock.json",
		"yarn.lock",
	],
}
