var fs = require("fs");
var babel = require("babel-core");
var opts = JSON.parse(fs.readFileSync(__dirname+'/.babelrc')+'');


var filename = process.argv[2].replace(/\.js$/,'');

console.log("Reading file", filename);
var code = fs.readFileSync(__dirname+'/code/'+filename + '.js')+'';

console.log("Transpiling", filename);
var result = babel.transform(code, opts);

console.log('Writing transpiled code to /code/'+filename+'.es5.js');
fs.writeFile(__dirname+'/code/'+filename+'.es5.js', result.code);

console.log("Executing transpiled code:");
eval(result.code);
