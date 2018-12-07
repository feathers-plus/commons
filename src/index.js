
const array = require('./array');
const debug = require('./debug');
const fakes = require('./fakes');
const typeOf = require('./type-of');

module.exports = Object.assign({}, array, debug, fakes, typeOf);
