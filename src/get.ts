/**
 * Retrieves a value from a deeply nested object using "dot" notation.
 *
 * @param obj - The object to retrieve the value from.
 * @param path - The path to the desired value, using "dot" notation.
 * @param defaultValue - A default value to return if the specified path is not found.
 * @returns The value at the specified path, or the default value if the path is not found.
 *
 * @example
 * const obj = { products: { desk: { price: 100 } } };
 * const price = get(obj, 'products.desk.price', 0);
 * console.log(price); // 100
 *
 * const missing = get(obj, 'products.table.price', 0);
 * console.log(missing); // 0 (default value)
 */
export function get<T>(
  obj: Record<string, any>,
  path: string,
  defaultValue: T | undefined = undefined,
): T | undefined {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return defaultValue;
    }
  }

  return result !== undefined ? (result as T) : defaultValue;
}
