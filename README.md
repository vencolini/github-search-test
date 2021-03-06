# Githubtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.
It uses: 
- Node 12.18.1
- Nebular 4 for the UX elements
- Bootstrap 4.5 for responsive grid layout.

## Initial setup

1. Clone the repo.
2. Use `npm install` in the terminal to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# How to use the app

# 1. Search by username
  - Start typing a github username in the search box
  - Auto-suggestion will show the first 10 results with username and avatar image
  - Click on one of the results in the list
  - On the User Details page you will see the Name of the user with avatar picture, repos and followers.
  
# 2. By using direct UTL
- Use the following URL to see the details of known GitHub username

http://localhost:4200/user-details/{github_username}

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```sh
$ ng build
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
