import {log} from 'console';
import assert from 'assert';

assert.notEqual(typeof Promise, 'undefined');

log((cb) => cb(5 + 5));

[0, 1].map((item) => {
  return item;
});
