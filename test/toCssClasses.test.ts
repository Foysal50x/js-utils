import { describe, it, expect } from 'vitest';
import { toCssClasses } from '../src';

it('should include classes with a numeric key', () => {
  const classes = toCssClasses(['p-4', { 1: true }]);
  expect(classes).toBe('p-4 1');
});

it('should include classes where the value is true', () => {
  const classes = toCssClasses(['p-4', { 'font-bold': true }]);
  expect(classes).toBe('p-4 font-bold');
});

it('should exclude classes where the value is false', () => {
  const classes = toCssClasses(['p-4', { 'font-bold': false }]);
  expect(classes).toBe('p-4');
});

it('should handle a mix of strings, numeric keys, and boolean expressions', () => {
  const isActive = false;
  const hasError = true;
  const classes = toCssClasses([
    'p-4',
    { 'font-bold': isActive, 'bg-red': hasError, 1: true },
  ]);
  expect(classes).toBe('p-4 1 bg-red');
});

it('should return an empty string if no classes are included', () => {
  const classes = toCssClasses([{ 'font-bold': false, 'bg-red': false }]);
  expect(classes).toBe('');
});
