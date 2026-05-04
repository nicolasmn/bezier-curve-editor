/**
 * Build aria-label for a bezier handle.
 * Describes position to screen reader users.
 */
export function handleAriaLabel(
  handle: 'p1' | 'p2',
  x: number,
  y: number,
  precision = 2,
): string {
  const name = handle === 'p1' ? 'Control point 1' : 'Control point 2'
  const fx = x.toFixed(precision)
  const fy = y.toFixed(precision)
  return `${name}, x ${fx}, y ${fy}. Use arrow keys to move.`
}
