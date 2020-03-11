const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.json', '.vue', '.ts', '.scss', '.html'],
		alias: {
			'~': path.resolve(__dirname),
		}
	}
};