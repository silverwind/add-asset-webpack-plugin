'use strict';
const AddAssetPlugin = require('..');

module.exports = {
	output: {
		filename: 'unicorn.js'
	},
	entry: __dirname,
	plugins: [
		new AddAssetPlugin('rainbow.js', 'console.log("🌈")'),
		new AddAssetPlugin('cake.js', () => 'console.log("🎂")'),
		new AddAssetPlugin('cat.js', () => Promise.resolve('console.log("🐈")'))
	]
};
