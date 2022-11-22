module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,png,ico,js,html,json,css}'
	],
	
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js',
};