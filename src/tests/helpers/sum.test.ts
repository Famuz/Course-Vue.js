import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../helpers/sum';

describe('add function', () => {
  test('add 1 + 2 to equal 3', () => {
    // Preparation
    const a = 1;
    const b = 2;

    // Resolution / action
    const result = sum(1, b);

    // Expected behavior
    expect(result).toBe(a + b);

    // expect(sum(1, 2)).toBe(3);
    // if (sum(1, 2) !== 3) {
    //   throw new Error('La suma no es correcta');
    // }
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const numberArray: number[] = [];

    const result = addArray(numberArray);
    console.log({ result });

    expect(result).toBe(0);
  });

  test('should return the  proper value of the addArray function', () => {
    const numberArray: number[] = [1, 2, 3, 4, 5];

    const result = addArray(numberArray);

    expect(result).toBe(15);
  });
});
