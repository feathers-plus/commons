
/* globals describe, it */

const { assert } = require('chai');
const commons = require('../src/index');

const commonsNames = [
  'debug',
  'flatten1Level',
  'inspector',
  'isArray',
  'isBoolean',
  'isFunction',
  'isNullsy',
  'isObject',
  'isString',
  'SpyOn',
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
