var argv = require('argv'),
	fs = require('fs'),
	path = require('path'),
	installer = require('./install_service'),
	uninstaller = require('./uninstall_service'),
	appArguments = argv.info('Service installing; Examples:' +
	'\nnode service_cli.js -a install' +
	'\nnode service_cli.js -a uninstall').option([
		{
			name: 'action',
			short: 'a',
			type: 'string',
			description: 'Action -> install or uninstall'
		}
	]).run();

var action = appArguments.options.action;

if (!action) {
	return argv.help();
}

switch (action) {
	case 'install':
		installer();
		return;
	case 'uninstall':
		uninstaller();
		return;
}
