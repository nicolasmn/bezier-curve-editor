/**
 * Walk up the DOM from an event target to the nearest handle group.
 * Returns 'p1' | 'p2' or null when the target is not a handle.
 */
export function resolveHandle(el: Element | null): 'p1' | 'p2' | null {
  while (el) {
    const h = el.getAttribute?.('data-handle')
    if (h === 'p1' || h === 'p2') return h
    el = el.parentElement
  }
  return null
}
