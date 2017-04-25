var fs = require("fs");
var babel = require("babel-core");
var opts = JSON.parse(fs.readFileSync(__dirname+'/.babelrc')+'');

var util = require('util')
var exec = require('child_process').exec;

var filename = process.argv[2].replace(/\.js$|\.ts$/,'');

console.log("Reading file", filename);

var format;

try {
  var code = fs.readFileSync(__dirname+'/code/'+filename + '.js')+'';
  console.log("Found JS file");
  format = 'js';
} catch (e) {
  try {
    fs.readFileSync(__dirname+'/code/'+filename + '.ts')+'';
    console.log("Found TS file");
    format = 'ts';
  } catch (e) {
    fs.readFileSync(__dirname+'/code/'+filename + '.tsx')+'';
    console.log("Found TSX file");
    format = 'tsx';
  }
}

console.log(" ************ Transpiling *************** ");

if (format === 'js'){

  console.log("Transpiling ES6+ in", filename+'.js');
  var result = babel.transform(code, opts);

  result.code = result.code.replace("'use strict';","'use strict';\nrequire('babel-polyfill');");

  console.log('Writing transpiled code to /code/'+filename+'.es6-es5.js');
  fs.writeFile(__dirname+'/code/'+filename+'.es6-es5.js', result.code);
  execResult(result.code);
} else if (format === 'ts' || format === 'tsx') {
  console.log("Transpiling TypeScript in", filename+'.'+format);
  child = exec('npm run tsc -- code/'+filename+'.'+format+' --outFile code/'+filename+'.ts-es5.js', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('TypeScript compilation error: ', error);
    } else {
      console.log('Writing transpiled code to /code/'+filename+'.ts-es5.js');
      execResult(fs.readFileSync(__dirname+'/code/'+filename + '.ts-es5.js')+'');
    }
  });
} else {
  throw 'Couldnt find file '+filename;
}

function execResult(code){
  if (code.match('console.log')){
    console.log(" ************ Executing transpiled code *************** ");
    eval(code);
  }
}

/*
if (windowsEnvironment) {
  var cmd = 'npm.cmd'
} else {
  var cmd = 'npm'
}
spawn(cmd, ['run', 'touch1'])
*/
