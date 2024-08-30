import { test, expect, describe } from 'vitest';
import { crossJoin } from '../src';

test('["S", "M"], ["White", "Black"], ["Round"]', () => {
  expect(crossJoin(['S', 'M'], ['White', 'Black'], ['Round'])).toStrictEqual([
    ['S', 'White', 'Round'],
    ['S', 'Black', 'Round'],
    ['M', 'White', 'Round'],
    ['M', 'Black', 'Round'],
  ]);
});

test('[1, 2], [3, 4]', () => {
  expect(crossJoin([1, 2], [3, 4])).toStrictEqual([
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
  ]);
});

test("[1, 2], ['a', 'b']", () => {
  expect(crossJoin([1, 2], ['a', 'b'])).toStrictEqual([
    [1, 'a'],
    [1, 'b'],
    [2, 'a'],
    [2, 'b'],
  ]);
});
