const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const currentDir = __dirname;

const context = path.resolve(currentDir);

const webpackConfig = {
	mode: 'production',
	context: context,
	devtool: 'eval',
	entry: './resources/js/main.js',
	output: {
		filename: '[name].js',
		path: path.resolve(currentDir, 'dist'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		/* new CopyWebpackPlugin({
			patterns: [
				{
					context: context,
					from: './favicon.ico',
					to: path.resolve(currentDir, 'dist')
				}
			]
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: '[name].[chunkhash].boundle.map.js',
			exclude: ['vendor.js']
		})*/
	],
	devServer: {
		port: 4200
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['image-webpack-loader']
			}
		]
	}
}

module.exports = webpackConfig;