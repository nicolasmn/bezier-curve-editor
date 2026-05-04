# Accessibility

## Keyboard Interaction

| Key | Action |
|---|---|
| `Tab` | Move focus between handles and controls |
| `Arrow keys` | Move selected handle by 1 step |
| `Shift + Arrow` | Move handle by 10 steps (coarse) |
| `Alt + Arrow` | Move handle by 0.1 steps (fine) |
| `Enter` / `Space` | Confirm current handle position |
| `Escape` | Deselect handle, revert to last committed value |

## ARIA

- The editor canvas has `role="group"` with a descriptive `aria-label`.
- Each handle has `role="slider"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-label`.
- Value changes are announced via a live region.

## Reduced Motion

All animations in the preview area respect `prefers-reduced-motion`. When reduced motion is preferred, animations are replaced with a static final-state display.
