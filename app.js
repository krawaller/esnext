var webpack = require("webpack");
var fs = require("fs");
var folder = (__dirname+'/app/'+process.argv[2]).replace(/\/$/,'').replace('//','');
var watch = !!process.argv[3];

try {
  var code = fs.readFileSync(folder+'/bootstrap.js')+'';
  console.log("Found JS app");
  format = 'js';
} catch (e) {
  try {
    fs.readFileSync(folder + '/bootstrap.ts')+'';
    console.log("Found TS app");
    format = 'ts';
  } catch (e) {
    fs.readFileSync(folder + '/bootstrap.tsx')+'';
    console.log("Found TS app with JSX support");
    format = 'tsx';
  }
}

if (!format){
  throw "Couldn't find bootstrap file in "+folder;
}

var compiler = webpack({
  devtool: 'source-map',
  context: folder,
  entry: folder+'/bootstrap.' + format,
  output: {
    path: folder,
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: [".tsx",".ts",".js"]
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    },{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
      options: {
        compilerOptions: {
          sourceRoot: folder
        }
      }
    }]
  }
});

var reporter = function(err,stats){
  var timestamp = (new Date).toTimeString().split(" ")[0] + '   ';
  var message = stats.toString("errors-only") || 'build complete without errors!';
  console.log(timestamp, message);
};

if (watch){
  console.log("Starting to watch",folder,"\n(ctrl+C to quit)")
  compiler.watch({

  },reporter);
} else {
  console.log("Building",folder)
  compiler.run(reporter);
}
