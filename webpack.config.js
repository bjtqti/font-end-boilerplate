const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');
//console.log(NODE_MODULES)

module.exports = {
	entry:{
		demo:"./src/js/demo.js"
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"js/[name]-[hash:7].js",
		libraryTarget: "umd"
	},
	resolve:{
		modules: [ 'node_modules' ],
		extensions: ['.js', '.styl','.css']
	},
	target: "web", // enum
	module:{
		rules:[
			{
		        test: /\.(es6|jsx)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.styl|css$/,
		    	use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: [{
                        loader: 'css-loader',
                        options: {
                        	import:true,
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                    	loader:'stylus-loader'
                    }]
		        }),
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.(png|jpg|svg|gif)$/,
		    	loader:'file-loader',
		    	options:{
		    		outputPath:'images/',
		    		useRelativePath:true
		    	}
		    }
		]
	},
	plugins: [
	  new webpack.DefinePlugin({
	    'process.env.NODE_ENV': '"production"',
	  }),
	  new CleanWebpackPlugin('dist'),
	  new ExtractTextPlugin({
	    filename: 'css/[name]-[hash:7].css',
	    allChunks: true,
	  }),
	  new HtmlWebpackPlugin({
	  	template:'./src/demo.html',
	  	inject:'head',
	  	minify:false
	  })
	]
}