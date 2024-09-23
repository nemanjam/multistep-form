## Tailwind breakpoints

- mobile - 0 - sm (min-w-80 = 320px)
- tablet - sm - lg
- desktop - lg - max (max-w-screen-2xl = 1536px)

For main content width it uses default Tailwind `container` class that sets `max-width` to the `min-width` of the breakpoint. It is a reasonable default, if needed it can be limited to different preference.
