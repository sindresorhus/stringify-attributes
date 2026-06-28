// Not using `escape-goat` as it escapes `'`, which is unnecessary here since values are always double-quoted, and it would mangle things like `url('foo.png')`.
const escapeAttributeValue = string => string
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	// `<` and `>` don't need escaping in a double-quoted attribute, but we do it to be defensive and to keep them visibly distinct from HTML tags.
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

export default function stringifyAttributes(attributes) {
	const handledAttributes = [];

	for (let [key, value] of Object.entries(attributes)) {
		if (value === false || value === undefined || value === null) {
			continue;
		}

		if (Array.isArray(value)) {
			value = value.join(' ');
		}

		let attribute = escapeAttributeValue(key);

		if (value !== true) {
			attribute += `="${escapeAttributeValue(String(value))}"`;
		}

		handledAttributes.push(attribute);
	}

	return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : '';
}
