import { test, expect } from 'vitest';
import { blank } from '../src';

test("blank('')", () => {
  expect(blank('')).toBe(true);
});

test("blank('   ')", () => {
  expect(blank('   ')).toBe(true);
});

test('blank(null)', () => {
  expect(blank(null)).toBe(true);
});

test('blank({})', () => {
  expect(blank({})).toBe(true);
});

test('blank([])', () => {
  expect(blank([])).toBe(true);
});

test('blank(0)', () => {
  expect(blank(0)).toBe(false);
});

test('blank(true)', () => {
  expect(blank(true)).toBe(false);
});

test('blank(false)', () => {
  expect(blank(false)).toBe(false);
});
