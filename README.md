# RegentHetWeer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

If the widget is not loading, check the console for the following error:
"You have exceeded the MONTHLY quota for Requests Today on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/standingapi-standingapi-default/api/bestweather".

As this API has a limit of 50 hits per month, you might need to sign in, create a new key and replace the XRapidAPIKeyHeaderValue variable in the environment.ts and environment.prod.ts files.

<img width="951" alt="image" src="https://user-images.githubusercontent.com/58602405/185516050-f4c7c5c2-4866-41c1-a9ae-62888a96210c.png">

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
