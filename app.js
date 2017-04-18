var webpack = require("webpack");

var folder = __dirname+'/app/'+process.argv[2];

var watch = !!process.argv[3];

var compiler = webpack({
  devtool: 'source-map',
  entry: folder+'/bootstrap.js',
  output: {
    path: folder,
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: [".js",""]
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
