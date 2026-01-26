# Todo

- [ ] Template Flow
  - `@for` instead of `*ngFor`
  - `@if` intead of `*ngIf`
  - `@switch` instead of `*ngSwitch`

Between Angular 21.0 and 21.1 they made switch MUCH better. Pay attention to minor version!

- [ ] When to "share" components and how to do it.
- [ ] Testing Requirements (tiny bit)

- [ ] SIGNALS
  - What are they and why
  - Computing values from signals (projections, or 'selectors')
  - Side Effects (technical requirements)
  - Linked Signal - the "toilet plunger" of the signal world.
- In a component, you should use 98% signals.
  - No "bare" fields
  - Very little or no observables.
  - They are still ok but have perf and usability problems.
- [ ] Change Detection
  - Death of `zone.js`
  - Why
  - What it means for us.

- [ ] API Access
  - getting our list of links from an API.
