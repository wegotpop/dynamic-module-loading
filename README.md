# JS Dynamic module loading
Proof of concept for loading js modules dynamically using SystemJs.

## What is inside
A simple node server that serves a few static files, 3 different versions of an hypothetical js library and a json file that acts as a configuration.

## How to run the example
`npm install` will install the needed dependency (mostly for the node back end) and `npm run server` will start the server on port `:4040`

Running `npm start` will load a simple HTML page that contains the SystemJS library and a script to load the modules accordingly to the version listed on json file.

Change the version in the json file and refresh the page.

## Versions available
Valid versions are exactly `v1`, `v2`, `v3`, `v4` at the moment. Everything else should throw an error.
- v1 and v2 are just a simple js function,
- v3 is a simple react app, static assets (css and images) are loaded by default in the client
- v4 is a react app with styled component
