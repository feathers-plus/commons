
/* eslint no-console: 0 */

module.exports = {
  flatten1Level
};

// Edge does not yet support .flat()
// Ignore null and undefined elements
function flatten1Level (array) {
  return array.reduce((acc, val) => val !== null && val !== undefined ? acc.concat(val) : acc, []);
}
