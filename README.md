# TableManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## About the project

The project was designed using pure HTML and SCSS. NGXS, which provides state management in Angular, was then used to add data to the table. Version 14 of Angular and version 18 of Node were used. The table component was made a separate component to add data and these components were separated into lazy modules. In this way, application performance was increased and loading time was reduced. As a result of these steps, the application was made more organized and manageable by providing data management over NGXS when data is added to the table.
