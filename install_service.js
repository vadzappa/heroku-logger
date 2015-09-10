var Service = require('node-windows').Service,
path = require('path');

exports = module.exports = function installService() {
// Create a new service object
	var svc = new Service({
		name: 'hisesc5logger',
		description: 'logs events for the hisesc5',
		script: path.resolve('runLogger.js')
	});

// Listen for the "install" event, which indicates the
// process is available as a service.
	svc.on('install', function () {
		svc.start();
	});

	svc.install();

};
