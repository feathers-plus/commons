
/* eslint no-console: 0 */

module.exports = {
  flatten1Level,
};

// Edge does not yet support .flat()
function flatten1Level(array) {
  return array.reduce((acc, val) => acc.concat(val), []);
}
