# Day 2

## Day 1 Review

- Getting Started
- Component Based Architecture
  - The "style" of Angular
- General Project Structure Stuff
  - My structure is good, or I wouldn't use it.
  - You don't have to use mine, but have SOMETHING
  - Conventions but not too restrictive/proscriptive - don't let it get in the way of "CAFO"
  - You will work with in a area. (domain, feature, whatever)
  - You can do whatever you want in that area.
  - You cannot change anything outside of that area.
    - You do not need a "review" for code in your area.
    - You have to do a PR for anything that changes anything outside of your area.
      - that PR cannot involve anything IN your area.
  - sketching out a component
    - create a rough of the UI
    - consider variants / modes
      - what about a link that only has a "primary url"
        - what about a link that has multiple URLs
      - figure out the "type" (the "View Model")
      - Modes are things like "valid", "invalid", "loading", "pending", etc. - we'll talk about this when we do API stuff.
    - fake it with that data
    - then think about mapping it to the api
      - MSW
      - Actual API
- Reset your code (I'll review)
- Signals!
  - Overview - moving from Zone.js
  - Signals
  - Computed
  - Effect
  - Linked Signal
- Using In Components

## Plan

- Review The Lab
- I have "Duplicate Labs"
  - One that you could use a reference of what we did in lab 1 (this is the `/areas/labs/lab1-landing`) and another I'll keep going with now (`/areas/labs/lab1jeff/lab1-landing`)
    - If you are going to play along, add the `lab1jeff`, with a routes in app.routes and app.ts.
- Show my changes
  - styles
- Plan
  - Naming a task.
  - Removing a task.
  - Editing Start time and End time?
  - Rating Focus on that task.
  - API Interactions
