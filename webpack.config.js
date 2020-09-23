/**
 * Webpack Config
 */
const path = require('path');

module.exports = {
	resolve: {
		alias: {
			actions: path.join('src/actions/'),
			components: path.join('src/components/'),
			assets: path.join('src/assets/'),
			routes: path.join('src/routes/'),
			constants: path.join('src/constants/'),
			helpers: path.join('src/helpers/'),
         api: path.join('src/api/'),
         util: path.join('src/util')
		}
	},
	externals: [{
		config: JSON.stringify({
			 apiUrl: 'http://localhost:4000'
		})
  	}]
};