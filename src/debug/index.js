
/* eslint no-console: 0 */
const { inspect } = require('util');

module.exports = {
  debug,
  inspector,
  throwError
};

function debug () {}

function inspector (desc, obj) {
  if (desc) console.log(desc);
  console.log(inspect(obj, { colors: true, depth: 5 }));
}

function throwError (msg, code) {
  const err = new Error(msg);
  err.code = code;
  throw err;
}
