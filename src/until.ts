import {sleep} from './sleep';

/**
 * Continuously attempts a function until a condition is met.
 *
 * @param {() => boolean | Promise<boolean>} condition - A function returning a boolean or a promise resolving to a boolean.
 * @param {() => T | Promise<T>} attempt - The function to execute until the condition is met.
 * @param {number} [pause=1] - The number of seconds to pause between attempts.
 * @returns {Promise<T>} The result of the attempt function when the condition is met.
 *
 * @example
 * const result = await until(() => isConditionTrue(), () => fetchData(), 2);
 */
export async function until<T>(
  condition: () => boolean | Promise<boolean>,
  attempt: () => T | Promise<T>,
  pause: number = 1,
): Promise<T> {
  let result = await attempt();
  while (!condition()) {
    await sleep(pause);
    result = await attempt();
  }
  return result;
}