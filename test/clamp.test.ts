import { it, expect } from 'vitest';
import { clamp } from '../src';

it('should return the value when it is within the range', () => {
  expect(clamp(5, 1, 10)).toBe(5);
  expect(clamp(7, 5, 10)).toBe(7);
});

it('should return the min value when the value is less than the min', () => {
  expect(clamp(-5, 1, 10)).toBe(1);
  expect(clamp(0, 1, 5)).toBe(1);
});

it('should return the max value when the value is greater than the max', () => {
  expect(clamp(15, 1, 10)).toBe(10);
  expect(clamp(100, 50, 75)).toBe(75);
});

it('should handle cases where min and max are the same', () => {
  expect(clamp(5, 5, 5)).toBe(5);
  expect(clamp(10, 10, 10)).toBe(10);
});

it('should throw an error when min is greater than max', () => {
  expect(() => clamp(5, 10, 1)).toThrowError(
    'Minimum (10) is not less than maximum (1).',
  );
  expect(() => clamp(20, 30, 10)).toThrowError(
    'Minimum (30) is not less than maximum (10).',
  );
});
