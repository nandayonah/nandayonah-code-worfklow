# Nandayonah Setup Workflow React + ESLint + Prettier + Flowtype

### Install VSCode Extensions

- Prettier ESLint
- Prettier
- ESLint
- Flow Language Support

### Edit Your VSCode Settings

```json
{
	"editor.formatOnSave": true,
	// turn it off for JS and JSX, we will do this via eslint
	"[javascript]": {
		"editor.formatOnSave": false
	},
	"[javascriptreact]": {
		"editor.formatOnSave": false
	},
	// tell the ESLint plugin to run on save
	"eslint.validate": ["html", "javascript", "javascriptreact"],
	// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
	"prettier.disableLanguages": ["javascript", "javascriptreact"],
	"eslint.workingDirectories": [
		{
			"mode": "auto"
		}
	],
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"javascript.validate.enable": false
}
```
