# stringify-attributes [![Build Status](https://travis-ci.org/sindresorhus/stringify-attributes.svg?branch=master)](https://travis-ci.org/sindresorhus/stringify-attributes)

> Turn an object into a string of HTML attributes


## Install

```
$ npm install stringify-attributes
```


## Usage

```js
const stringifyAttributes = require('stringify-attributes');

stringifyAttributes({
	unicorn: '🦄',
	rainbow: true,
	number: 1,
	multiple: [
		'a',
		'b'
	]
});
//=> ' unicorn="🦄" rainbow number="1" multiple="a b"'
```

Note that the string is prepended with a space when there are attributes to simplify using it in a HTML tag.


## Related

- [create-html-element](https://github.com/sindresorhus/create-html-element) - Create a HTML element string


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
