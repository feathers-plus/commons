
/* globals describe, it */

const { assert } = require('chai');
const commons = require('../src/index');

const commonsNames = [
  'debug',
  'flatten1Level',
  'inspector',
  'isArray',
  'isFunction',
  'isNullsy',
  'isObject',
  'isString',
  'throwError'
].sort();

describe('exposed.js', () => {
  it('has expected utilities', () => {
    assert.deepEqual(
      Object.keys(commons).sort(),
      [].concat(commonsNames).sort()
    );
  });
});
