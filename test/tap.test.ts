import { test, expect } from 'vitest';
import { tap } from '../src';

test('should return the result of the interceptor function', () => {
  const result = tap(5, (n) => n * 2);
  expect(result).toBe(10);
});
