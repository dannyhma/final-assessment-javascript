import { describe, test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('Calculator', () => {
  test('should sum correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });
});