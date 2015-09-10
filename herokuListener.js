/**
 * Author: Vadim
 * Date: 5/9/2014
 */
var util = require('util'),
    _ = require('lodash'),
    spawn = require('child_process').spawn;

var HerokuLogsListener = function (options) {
    options = options || {};
    this.applicationName = options.applicationName;
    this.executable = options.executable;
    this.encoding = options.encoding;
};

util.inherits(HerokuLogsListener, require('events').EventEmitter);

_.extend(HerokuLogsListener.prototype, {
    start: function () {
        var self = this,
            executable = this.executable,
            appName = this.applicationName ? this.applicationName : '',
            encoding = this.encoding ? this.encoding : 'utf8',
            herokuCliParameters = ['logs', '--tail'];

        if (appName.length > 0) {
            herokuCliParameters.push('--app');
            herokuCliParameters.push(appName);
        }

        this.tailingProcess = spawn(executable, herokuCliParameters);

        this.tailingProcess.stdout.setEncoding(encoding);
        this.tailingProcess.stderr.setEncoding(encoding);

        this.tailingProcess.stdout.on('data', function (data) {
            var lines = data.split(/(\r\n|\n|\r)/gm);
            _.each(lines, function (line) {
                if (line.trim().length > 0) {
                    self.emit('line', line);
                }
            });
        });
        this.tailingProcess.stderr.on('data', function (data) {
            var lines = data.split(/(\r\n|\n|\r)/gm);
            _.each(lines, function (line) {
                if (line.trim().length > 0) {
                    self.emit('line', line);
                }
            });
        });

        this.tailingProcess.on('close', function (code) {
            self.emit('close', code);
        });

        this.tailingProcess.on('exit', function (code) {
            self.emit('exit', code);
        });
    },
    stop: function () {
        if (this.tailingProcess) {
            this.tailingProcess.kill();
        }
    }
});

module.exports = HerokuLogsListener;