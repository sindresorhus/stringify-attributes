# stringify-attributes

> Turn an object into a string of HTML attributes

## Install

```sh
npm install stringify-attributes
```

## Usage

```js
import stringifyAttributes from 'stringify-attributes';

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
