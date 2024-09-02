/**
 * Sets a value within a deeply nested object using "dot" notation.
 *
 * @param obj - The object to set the value in.
 * @param path - The path to the location where the value should be set, using "dot" notation.
 * @param value - The value to set at the specified path.
 * @returns The modified object with the new value set.
 *
 * @example
 * const obj = { products: { desk: { price: 100 } } };
 * set(obj, 'products.desk.price', 200);
 * console.log(obj); // { products: { desk: { price: 200 } } }
 */
export function set(
  obj: Record<string, any>,
  path: string,
  value: any,
): Record<string, any> {
  const keys = path.split('.');
  let current = obj;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (
        !(key in current) ||
        typeof current[key] !== 'object' ||
        current[key] === null
      ) {
        current[key] = {};
      }
      current = current[key];
    }
  });

  return obj;
}
