import { it, expect } from 'vitest';
import { set, get } from '../src';

it('should set the value at the specified path', () => {
  const obj = { products: { desk: { price: 100 } } };
  expect(get(obj, 'products.desk.price')).toBe(100);
  set(obj, 'products.desk.price', 200);
  expect(obj.products.desk.price).toBe(200);
});

it('should create nested objects if the path does not exist', () => {
  const obj = { products: {} };
  set(obj, 'products.desk.price', 200);
  expect(obj).toEqual({ products: { desk: { price: 200 } } });
});

it('should overwrite existing values', () => {
  const obj = { products: { desk: { price: 100 } } };
  set(obj, 'products.desk.price', 300);
  expect(obj.products.desk.price).toBe(300);
});

it('should work with an empty object', () => {
  const obj = {};
  set(obj, 'products.desk.price', 200);
  expect(obj).toEqual({ products: { desk: { price: 200 } } });
});

it('should handle non-object types in the path gracefully', () => {
  const obj = { products: null };
  set(obj, 'products.desk.price', 200);
  expect(obj).toEqual({ products: { desk: { price: 200 } } });
});

it('should handle nested arrays properly', () => {
  const obj = { items: [{ id: 1 }, { id: 2 }] };
  set(obj, 'items.1.id', 3);
  expect(obj.items[1]!.id).toBe(3);
});
