import { describe, test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Calculator', () => {
  test('should sum correctly for positive numbers', () => {
    // Arrange
    const operandA = 2;
    const operandB = 3;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 when one of the operands is negative', () => {
    // Arrange
    const operandA = -1;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 when both operands are negative', () => {
    // Arrange
    const operandA = -1;
    const operandB = -2;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 when one of the operands is not a number', () => {
    // Arrange
    const operandA = 'a';
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 when both operands are not numbers', () => {
    // Arrange
    const operandA = 'a';
    const operandB = 'b';

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 0;
    assert.equal(actualValue, expectedValue);
  });

  test('should return the correct sum when one operand is zero', () => {
    // Arrange
    const operandA = 0;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.equal(actualValue, expectedValue);
  });

  test('should return 0 when both operands are zero', () => {
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
