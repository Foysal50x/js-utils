/**
 * Determines whether the given value is "blank".
 * A value is considered blank if it's one of the following:
 * - Empty string
 * - String containing only whitespace
 * - Null
 * - Undefined
 * - Empty object
 * - Empty array
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is blank, false otherwise.
 *
 * @example
 * blank('');          // true
 * blank('   ');        // true
 * blank(null);         // true
 * blank({});           // true
 * blank([]);           // true
 * blank(0);            // false
 * blank(true);         // false
 * blank(false);        // false
 */
export function blank(value: any): boolean {
  if (value === null || value === undefined) return true;

  if (typeof value === 'string' && value.trim() === '') return true;

  if (Array.isArray(value) && value.length === 0) return true;

  return (
    typeof value === 'object' &&
    !Array.isArray(value) &&
    Object.keys(value).length === 0
  );
}
