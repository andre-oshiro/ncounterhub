# Ncounterhub

A chat application without need to add friends.
Just search them and chat.

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

### Dev server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Client architecture

```
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── layouts
│   │   ├── components
│   │   └── containers
│   ├── modules
│   │   ├── chat
│   │   │   ├── components
│   │   │   ├── containers
│   │   │   └── ...
│   │   └── ...
│   └── shared
│       ├── components
│       ├── constants
│       └── ...
└── ...
```
