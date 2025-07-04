import { useCounter } from '@/composables/useCounter';
import { describe } from 'node:test';
import { expect, test } from 'vitest';

describe('useCounter', () => {
  test('initializes counter with provided default values', () => {
    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(5 * 5);
  });

  test('initializes counter with provided initial value', () => {
    const initialValue = 10;

    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('increments counter correctly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });
});
