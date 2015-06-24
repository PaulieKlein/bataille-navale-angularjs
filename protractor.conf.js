exports.config={
	seleniumAddress:'http://localhost:4444/wd/hub',

	multiCapabilities: [{
		'browserName': 'firefox'
	}, {
		'browserName': 'chrome'
	}],

	baseUrl:'http://localhost:3000',

	specs:[
	'tests/e2e/**/*.js'
	],
};