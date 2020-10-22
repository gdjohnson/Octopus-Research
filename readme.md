* install node modules; `nodemon app.js` to start

* when adding a new folder, make sure it's added to the calls in `customWikiLinks()`, `getHomePage()`, and `buildRoutes()` invocation 
* file names must be in camelcase to be properly parsed for linking

* Table of contents builds automatically from headers
* [[ ]] double brackets e.g. [[Other Minds]] to link to any pages within /pages (or subfolders thereof)
