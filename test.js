import test from 'ava';
import m from '.';

test('stringifies attributes', t => {
	t.is(
		m({
			unicorn: '🦄',
			rainbow: true,
			number: 1,
			multiple: ['a', 'b'],
			alt: ''
		}),
		' unicorn="🦄" rainbow number="1" multiple="a b" alt=""'
	);
});

test('nothing', t => {
	t.is(
		m({}),
		''
	);
});

test('escapes attributes', t => {
	t.is(
		m({
			class: '<script></script>'
		}),
		' class="&lt;script&gt;&lt;/script&gt;"'
	);
});
