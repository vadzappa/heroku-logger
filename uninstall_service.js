var Service = require('node-windows').Service,
path = require('path');

exports = module.exports = function uninstallService() {

// Create a new service object
	var svc = new Service({
		name: 'hisesc5logger',
		script: path.resolve('runLogger.js')
	});

// Listen for the "uninstall" event so we know when it's done.
	svc.on('uninstall', function () {
		console.log('Uninstall complete.');
		console.log('The service exists: ', svc.exists);
	});

// Uninstall the service.
	svc.uninstall();
};
