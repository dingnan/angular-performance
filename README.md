# AngularPerformance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

`npx -p @angular/cli ng new angular-performance`

## Performance Tuning

1. lazy load module
2. preload lazy modules in the background
3. lazy load component
4. analyze bundle size `npm run analyze`
5. change detection strategies - OnPush
6. make onPush the default change detection strategy
7. detaching top components from the Change Detector
8. using a pure pipe instead of method in templates
9. using trackBy in ngFor

## Code scaffolding

Run `npx ng g c component-name` to generate a new component. You can also use `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `npx ng generate module customers --route customers --module app.module` to generate feature module

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
