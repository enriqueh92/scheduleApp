// var webpack = require('webpack');
var path = require('path');

// distribution directory, the directory where you want to copy all the transpiled and prepared files to
var DIST_DIR = path.resolve(__dirname, 'dist');
// source directory, the directory from where to copy from
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	// entry point, tells webpack what file to start transpiling from
	entry: SRC_DIR + '/app/index.js',
	// tells web pack where to output everything
	output: {
		// the 'app' folder will be created automatically in the DIST folder
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		// tells webpack what file to actually deploy when it comes time to deploy
		publicPath: '/app/'
	},
	mode: "development",
	// define all the modules you want to use during the webpack process
	module: {
    rules: [
      {
      	//this tells webpack what files to test/look at.  This is regex to include all javascript files
      	test: /\.js?/,
      	include: SRC_DIR,
      	loader: "babel-loader",
      	query: {
      		presets: ["react", "env", "stage-2"]
      	}
      }
    ]
	}
}

module.exports = config;


//20:26.  time for youtube video

//if this does not work try to change 'env' to es2015

//video that explains this whole file https://www.youtube.com/watch?v=uextYhQGP6k