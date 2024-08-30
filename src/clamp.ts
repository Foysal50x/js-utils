/**
 * Returns a value clamped to the inclusive range of min and max.
 *
 * This function ensures that the `value` falls within the specified range. If the `value`
 * is less than `min`, it returns `min`. If the `value` is greater than `max`, it returns `max`.
 * Otherwise, it returns the `value` itself.
 *
 * @param value The value to be clamped.
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @returns The clamped value within the range of min and max.
 * @throws Error If the minimum value is greater than the maximum value.
 *
 * @example
 * ```typescript
 * const clamped1 = clamp(5, 1, 10);
 * console.log(clamped1); // 5
 *
 * const clamped2 = clamp(15, 1, 10);
 * console.log(clamped2); // 10 (since 15 is greater than max 10)
 *
 * const clamped3 = clamp(-5, 1, 10);
 * console.log(clamped3); // 1 (since -5 is less than min 1)
 *
 * // This will throw an error because min is greater than max
 * try {
 *     const clamped4 = clamp(5, 10, 1);
 * } catch (error) {
 *     console.error(error.message); // "Minimum (10) is not less than maximum (1)."
 * }
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    throw new Error(`Minimum (${min}) is not less than maximum (${max}).`);
  }

  return Math.min(Math.max(value, min), max);
}
