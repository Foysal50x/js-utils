import {usleep} from './usleep';

/**
 * Pauses the execution for a specified number of seconds.
 *
 * @param {number} s - The number of seconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 *
 * @example
 * await sleep(2); // Pauses execution for 2 seconds.
 */
export async function sleep(s: number) {
  return usleep(s * 1000);
}