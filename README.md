# LinkShare

This project is meant to make it easy to share links from mobile to desktop browser (firefox).

WARNING: This project is in development right now and not stable nor finished in any way.

## Server

The web-ext will expect a GraphQL-Server from my `link-share-server`-repository to run on `localhost:4000`.

## Build and test

Use`npm run-script build` to compile and `npm run-script test` to start the web-ext.
The script is configured for linux with defaulft firefox installation.
Adapt to your firefox installation in package.json.

Run `npm run-script build:zip` to build the project for production.
The build artifacts will be stored in the `dist/` directory.

## Ressources

This project is heavily inspired by [this blog article](https://cito.github.io/blog/web-ext-with-angular/).
