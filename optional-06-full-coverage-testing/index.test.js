import {describe, test} from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Sum', () => {
  test('correctly calculates the sum of two positive integers', () => {
    // Test the addition of two positive numbers
    assert.equal(sum(2, 3), 5);
  });

  test('returns zero if any operand is negative', () => {
    // Test that the function returns zero if any operand is negative
    assert.equal(sum(-1, 5), 0);
    assert.equal(sum(1, -2), 0);
    assert.equal(sum(-1, -2), 0);
  });

  test('returns zero if any operand is not a number', () => {
    // Test that the function returns zero if any operand is not a number
    assert.equal(sum('a', 5), 0);
    assert.equal(sum('a', 'b'), 0);
  });

  test('correctly returns the sum when one operand is zero', () => {
    // Test that the function correctly sums when one operand is zero
    assert.equal(sum(0, 5), 5);
    assert.equal(sum(0, 0), 0);
  });
});
