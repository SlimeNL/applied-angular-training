# Naming Conventions

There is an "Angular Style Guide"
// todo: put a link here.

Project Structure is for:

- Working in a team (different folks working on different parts of the app concurrently)
- Bundling (delivering updates without having it be a pain for our users.)

## Hard Rules

- Source code files (.ts, .html etc) are CASE SENSITIVE.
- Windows is NOT case sensitive - so if you are a C# programmer, this is weird.
- always use consistent casing on files. I use lower-case, "kebab" delimited.
  - e.g. `button.ts` is different than `Button.ts`

## Angular Style Guide Thigns

-- They updated this just in the last year.

We used to put the "kind" of thing we are building in the component name.

They say that isn't good. I _mostly_ agree, but not 100% sold.

e.g.

Old Skool `button.component.ts`, or `links.service.ts`

New Skool `button.ts`, `links-data.ts`
