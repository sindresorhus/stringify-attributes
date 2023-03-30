// eslint-disable-next-line @typescript-eslint/naming-convention
export type HTMLAttributes = Record<string, string | number | boolean | readonly string[]>;

/**
Turn an object into a string of HTML attributes.

Note that the string is prepended with a space when there are attributes to simplify using it in a HTML tag.

@example
```
import stringifyAttributes from 'stringify-attributes';

stringifyAttributes({
	unicorn: '🦄',
	rainbow: true,
	number: 1,
	multiple: ['a', 'b']
});
//=> ' unicorn="🦄" rainbow number="1" multiple="a b"'
```
*/
export default function stringifyAttributes(attributes: HTMLAttributes): string;
