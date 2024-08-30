import { test, expect } from 'vitest';
import { until } from '../src/until';

test('should resolve with the result of the attempt function when condition is met', async () => {
  let counter = 0;
  const condition = () => counter >= 2;
  const attempt = async () => {
    counter += 1;
    return counter;
  };
  const result = await until(condition, attempt, 0.1);
  expect(result).toBe(2);
});
