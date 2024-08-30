/**
 * Pauses the execution for a specified number of milliseconds.
 *
 * @param {number} ms - The number of milliseconds to sleep.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 *
 * @example
 * await usleep(500); // Pauses execution for 500 milliseconds.
 */
export async function usleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}