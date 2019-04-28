'use strict';
const {htmlEscape} = require('escape-goat');

module.exports = input => {
	const attributes = [];

	for (let [key, value] of Object.entries(input)) {
		if (value === false) {
			continue;
		}

		if (Array.isArray(value)) {
			value = value.join(' ');
		}

		let attribute = htmlEscape(key);

		if (value !== true) {
			attribute += `="${htmlEscape(String(value))}"`;
		}

		attributes.push(attribute);
	}

	return attributes.length > 0 ? ' ' + attributes.join(' ') : '';
};
