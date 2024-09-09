/**
 * Conditionally compiles a CSS class string based on an object where keys are class names
 * and values are boolean expressions. Numeric keys are always included.
 *
 * @param classes - An object or array where the key is the class name and the value is a boolean expression.
 * @returns A string of compiled CSS classes.
 *
 * @example
 * const isActive = false;
 * const hasError = true;
 * const classes = toCssClasses(['p-4', { 'font-bold': isActive, 'bg-red': hasError }]);
 * console.log(classes); // 'p-4 bg-red'
 */
export function toCssClasses(
  classes: Array<string | Record<string | number, boolean>>,
): string {
  return classes
    .map((cls) => {
      if (typeof cls === 'string') {
        // If it's a string, include it directly
        return cls;
      } else {
        // If it's an object, include keys where the value is true, or numeric keys
        return Object.keys(cls)
          .filter((key) => cls[key as keyof typeof cls])
          .join(' ');
      }
    })
    .filter(Boolean) // Remove any empty strings
    .join(' '); // Join all valid classes with a space
}
