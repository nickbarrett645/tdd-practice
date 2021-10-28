# tdd-practice
A repository set up to do quick TDD practice in JavaScript

## Setup
1. clone the repo
2. cd in **tdd-practice**
3. install npm package:
	```$ npm install```
4. run tests:
	```$ npm test```

## Add New Tests
1. Write functions in index.js
2. Export function in index.js by adding:
	```exports.<newfunction>```
3. Create new test in **test/index.spec.js**
	- reference your new function via the imported index object:
	```index.<newfunction>```
