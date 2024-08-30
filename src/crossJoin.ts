/**
 * Returns the Cartesian product of the given arrays.
 *
 * The Cartesian product of multiple sets is a set of all possible combinations
 * where each combination contains one element from each input array.
 *
 * @param arrays - An array of arrays to compute the Cartesian product.
 * @returns An array of arrays, where each inner array is a combination of elements from the input arrays.
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
 */
export function crossJoin<T = number | string>(
  ...arrays: (number[] | string[])[]
): T[][] {
  // Start with an array containing an empty array
  let result: T[][] = [[]];

  // Loop through each array provided
  for (const array of arrays) {
    // Perform the Cartesian product with the current result
    result = result.flatMap((r: T[]) => array.map((a) => [...r, a as T]));
  }

  return result;
}
