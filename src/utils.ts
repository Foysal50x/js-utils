/**
 * Returns the Cartesian product of the given arrays or arrays of objects based on a specified key.
 *
 * The Cartesian product of multiple sets is a set of all possible combinations
 * where each combination contains one element from each input array.
 *
 * If arrays of objects are provided, the key parameter will be used to cross join the objects
 * based on the values of that key.
 *
 * @param arrays - An array of arrays to compute the Cartesian product. Arrays may contain objects.
 * @param key - Optional. The key to use when cross joining arrays of objects.
 * @returns An array of arrays or an array of objects, where each inner array or object is a combination of elements from the input arrays.
 *
 * @example
 * ```typescript
 * const result = crossJoin([1, 2], ['a', 'b']);
 * console.log(result);
 * // Output: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * ```
 *
 * @example
 * ```typescript
 * const result = crossJoin([1, 2], ['a', 'b'], ['x', 'y']);
 * console.log(result);
 * // Output: [
 * //   [1, 'a', 'x'], [1, 'a', 'y'],
 * //   [1, 'b', 'x'], [1, 'b', 'y'],
 * //   [2, 'a', 'x'], [2, 'a', 'y'],
 * //   [2, 'b', 'x'], [2, 'b', 'y']
 * // ]
 * ```
 * @example
 * ```typescript
 * const result = crossJoin([1, 2], ['a', 'b']);
 * console.log(result);
 * // Output: [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * ```
 *
 * @example
 * ```typescript
 * const result = crossJoin([1, 2], ['a', 'b'], ['x', 'y']);
 * console.log(result);
 * // Output: [
 * //   [1, 'a', 'x'], [1, 'a', 'y'],
 * //   [1, 'b', 'x'], [1, 'b', 'y'],
 * //   [2, 'a', 'x'], [2, 'a', 'y'],
 * //   [2, 'b', 'x'], [2, 'b', 'y']
 * // ]
 * ```
 */

export function crossJoin<T>(arrays: T[][], key?: keyof T): T[][] | T[] {
  let result: any[] = [[]];

  for (const array of arrays) {
    if (typeof array[0] === 'object' && key) {
      result = result.flatMap((r) => array.map((a) => ({ ...r, ...a })));
    } else {
      result = result.flatMap((r) => array.map((a) => [...r, a]));
    }
  }

  return result;
}
