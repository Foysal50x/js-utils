import { it, expect } from 'vitest';
import { get } from '../src';

it('should return the value at the name path', () => {
  const user = { name: 'Foysal Ahmed' };
  const result = get(user, 'name', 'Unknown');
  expect(result).toBe('Foysal Ahmed');
});

it('should return the value at the specified path', () => {
  const obj = { products: { desk: { price: 100 } } };
  const price = get(obj, 'products.desk.price', 0);
  expect(price).toBe(100);
});

it('should return the default value when the path is not found', () => {
  const obj = { products: { desk: { price: 100 } } };
  const missing = get(obj, 'products.table.price', 0);
  expect(missing).toBe(0);
});

it('should return the default value when the object is empty', () => {
  const obj = {};
  const missing = get(obj, 'products.desk.price', 0);
  expect(missing).toBe(0);
});

it('should handle nested arrays properly', () => {
  const obj = { items: [{ id: 1 }, { id: 2 }] };
  const secondItemId = get(obj, 'items.1.id', 0);
  expect(secondItemId).toBe(2);
});

it('should return undefined when the path leads to an undefined value', () => {
  const obj = { products: { desk: { price: undefined } } };
  const price = get(obj, 'products.desk.price');
  expect(price).toBeUndefined();
});

it('should handle non-object types gracefully', () => {
  const obj = { products: null };
  const result = get(obj, 'products.desk.price', 0);
  expect(result).toBe(0);
});
