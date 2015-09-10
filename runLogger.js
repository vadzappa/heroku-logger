var config = require('./config'),
    FileSystemLogger = require('./fileSystemLogger'),
    HerokuListener = require('./herokuListener');
    
var herokuListener = new HerokuListener(config.heroku),
    fileSystemLogger = new FileSystemLogger({
        eventProducer: herokuListener,
        eventsList: ['line'],
        loggingOptions: config.logger
    });

fileSystemLogger.attach();
herokuListener.start();

module.exports = {};