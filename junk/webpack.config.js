const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.json', '.vue'],
			alias: {
			'sass': path.resolve(__dirname, './resources/sass'),
			'js': path.resolve(__dirname, './resources/js'),
			'lang': path.resolve(__dirname, './resources/lang'),
		}
	},
	output: {
		publicPath: '/',
		chunkFilename: 'js/components/[name].js'
	},
};