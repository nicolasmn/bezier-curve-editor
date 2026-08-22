---
'@bezier-curve-editor/core': patch
---

Keyboard robustness: resolve focused handle from live DOM as fallback

Arrow-key nudges previously depended entirely on `focusin` being delivered to
set the internal `focusedHandle` state. In environments where focus events are
not delivered (headless pages without document focus, some restore-from-bfcache
timings), a visibly focused handle ignored arrow keys. The keyboard controller
now falls back to resolving the handle from the shadow root's `activeElement`
when the state mirror is unset.

Also: pointer capture failures (fast taps, synthetic pointers) no longer abort a
drag — capture is best-effort around a try/catch, drags work via the global
listeners regardless.

New component test suite (`element.test.ts`) runs in real Chromium and WebKit
via vitest Browser Mode, covering rendering, drag/keyboard interaction, ARIA
state, events, readonly/disabled, plus regression tests for both bugs fixed
today (constant viewBox under out-of-bounds drags; handles must not collapse to
r=0 when focused). CI workflow runs it on both engines.
