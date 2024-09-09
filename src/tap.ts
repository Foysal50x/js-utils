/**
 * @template T
 * Invokes an interceptor function with a provided value and returns the result.
 *
 * @param {any} value - The value to pass to the interceptor function.
 * @param {(v: any) => T} interceptor - A function that processes the value.
 * @returns {T} The result of the interceptor function.
 *
 * @example
 * const tappedValue = tap(5, (n) => n * 2); // tappedValue = 10
 */
export function tap<T>(value: any, interceptor: (v: any) => T): T {
  return interceptor(value);
}
