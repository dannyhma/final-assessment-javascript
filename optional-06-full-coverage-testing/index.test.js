import {describe, test} from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Sum', () => {
  test('correctly calculates the sum of two positive integers', () => {
    // Arrange
    const operandA = 2;
    const operandB = 3;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
  });

  test('returns zero if one operand is negative', () => {
    // Arrange
    const operandA = -1;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('returns zero when both operands are negative values', () => {
    // Arrange
    const operandA = -1;
    const operandB = -2;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('returns zero if any operand is not a number', () => {
    // Arrange
    const operandA = 'a';
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('returns zero when both operands are non-numeric', () => {
    // Arrange
    const operandA = 'a';
    const operandB = 'b';

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('correctly returns the sum when one operand is zero', () => {
    // Arrange
    const operandA = 0;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
  });

  test('returns zero when both operands are zero', () => {
    // Arrange
    const operandA = 0;
    const operandB = 0;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });
});
