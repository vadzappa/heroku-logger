var winston = require('winston'),
    _ = require('lodash');

var FileSystemLogger = function (options) {
    this.eventProducer = options.eventProducer;
    this.eventsList = options.eventsList;

    this.logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)(options.loggingOptions)
        ]
    });
};

_.extend(FileSystemLogger.prototype, {
    log: function log() {
        this.logger.debug.apply(null, arguments);
    },
    attach: function attach() {
        var self = this;
        this.bindedLog = this.log.bind(this);
        _.each(this.eventsList, function (eventName) {
            self.eventProducer.on(eventName, self.bindedLog);
        });
    },
    detach: function detach() {
        var self = this;
        _.each(this.eventsList, function (event) {
            self.eventProducer.removeListener(event, self.bindedLog);
        });

    }
});

module.exports = FileSystemLogger;