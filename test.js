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
				'b',
			],
			alt: '',
			undef: undefined,
			null: null,
		}),
		' unicorn="🦄" rainbow number="1" multiple="a b" alt=""',
	);
});

test('nothing', t => {
	t.is(
		stringifyAttributes({}),
		'',
	);
});

test('escapes attributes', t => {
	t.is(
		stringifyAttributes({
			class: '<script></script>',
		}),
		' class="&lt;script&gt;&lt;/script&gt;"',
	);

	t.is(
		stringifyAttributes({
			title: 'a & "b" <x>',
		}),
		' title="a &amp; &quot;b&quot; &lt;x&gt;"',
	);
});

test('does not escape single quotes', t => {
	t.is(
		stringifyAttributes({style: 'background-image:url(\'foo.png\')'}),
		' style="background-image:url(\'foo.png\')"',
	);
});
