'use strict';
const escapeGoat = require('escape-goat');

module.exports = input => {
	const attributes = [];

	for (const key of Object.keys(input)) {
		let value = input[key];

		if (value === false) {
			continue;
		}

		if (Array.isArray(value)) {
			value = value.join(' ');
		}

		let attribute = escapeGoat.escape(key);

		if (value !== true) {
			attribute += `="${escapeGoat.escape(String(value))}"`;
		}

		attributes.push(attribute);
	}

	return attributes.length > 0 ? ' ' + attributes.join(' ') : '';
};
