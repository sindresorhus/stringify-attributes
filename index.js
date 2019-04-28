'use strict';
const {htmlEscape} = require('escape-goat');

module.exports = attributes => {
	const handledAttributes = [];

	for (let [key, value] of Object.entries(attributes)) {
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

		handledAttributes.push(attribute);
	}

	return handledAttributes.length > 0 ? ' ' + handledAttributes.join(' ') : '';
};
