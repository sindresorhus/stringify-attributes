import test from 'ava';
import stringifyAttributes from './index.js';

test('stringifies attributes', t => {
	t.is(
		stringifyAttributes({
			unicorn: '🦄',
			rainbow: true,
			number: 1,
			multiple: [
				'a',
				'b'
			],
			alt: '',
			undef: undefined,
			null: null,
		}),
		' unicorn="🦄" rainbow number="1" multiple="a b" alt=""'
	);
});

test('nothing', t => {
	t.is(
		stringifyAttributes({}),
		''
	);
});

test('escapes attributes', t => {
	t.is(
		stringifyAttributes({
			class: '<script></script>'
		}),
		' class="&lt;script&gt;&lt;/script&gt;"'
	);
});
