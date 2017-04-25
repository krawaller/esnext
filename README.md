## Wat?

This is a simple playground for **testing out ES6 stuff**, as well as **proposals in stage 0 and up**. It contains **two different setups**:

### Code

This setup allows you to **run and transpile a single file**:

* create a file inside the `code` folder, for example `code/mytestfile.js`
* write the ES6 code you want to try in that file
* execute `node code mytestfile` in the terminal.
* see the output (if any) from your file in the terminal
* check the transpiled file in `code/mytestfile.es6-es5.js`

### App

This setup allows you to **bundle an app**:

* create a _folder_ inside the `app` folder, for example `app/myapp/`
* if you need 3rd party dependencies, add these to the _root `package.json`_ and install
* add a file `bootstrap.js` to that folder, which will be the app entry point
* add whatever other files you want, making sure that `bootstrap.js` `import`s what it needs
* execute `node app myapp` in the terminal
* the created bundle is now available at `app/myapp/bundle.js`, which you can run in whichever way you want
