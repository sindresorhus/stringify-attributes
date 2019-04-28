import {expectType} from 'tsd';
import stringifyAttributes = require('.');

expectType<string>(stringifyAttributes({unicorn: '🦄'}));
expectType<string>(stringifyAttributes({rainbow: true}));
expectType<string>(stringifyAttributes({number: 1}));
expectType<string>(stringifyAttributes({multiple: ['a', 'b']}));
