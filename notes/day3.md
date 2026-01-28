# Welcome Back! Day 3!

## Getting Into Your VM

- https://class.hypertheory-labs.dev/guacamole
- Username: `student`
- Password: `your-secret-password`

**Let me know if you need help, please!**

## Today

**I will be working from jefflab, NOT lab**

- Pull my code, copy that jefflab folder

Add this to app.routes.ts:

```
  {
    path: 'jefflabs',
    loadChildren: () =>
      import('./areas/labs/lab1jeff/lab1-landing/lab1.routes').then((r) => r.lab1FeatureRoutes),
  },
```

And then in app.ts:

```
    {
      path: '/jefflabs',
      title: 'Lab 1 (Jeff)',
      icon: 'lucideChessKing',
    },

```

Add The Icon:

```
lucideChessKing
```

- Lab 1
- Build On Lab 1
  - signalStore
  - affordances
    - entities
    - sorting, filtering, etc.
  - side effects
    - api, etc.
- Continuing With Services
  - signalStore
- Service Providers
  - Component
  - Route
  - App
- Data / Api / Etc.
