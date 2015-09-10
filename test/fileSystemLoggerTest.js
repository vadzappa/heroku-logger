/**
 * Author: Vadim
 * Date: 5/9/2014
 */
var expect = require('chai').expect,
    events = require('events'),
    EventEmitter = events.EventEmitter,
    FileSystemLogger = require('../fileSystemLogger');

describe('FileSystemLogger', function () {
    var simpleEmitter = new EventEmitter(),
        logger = new FileSystemLogger({
            eventProducer: simpleEmitter,
            eventsList: ['line', 'info'],
            loggingOptions: {
                level: 'silly',
                filename: 'c:\\temp\\winston.log',
                maxsize: 200
            }
        });
    this.timeout(60 * 60 * 1000);
    setInterval(function () {
        simpleEmitter.emit('line', new Date().getTime());
    }, 1000);
    describe('attach', function () {
        it('should attach normally', function (done) {
            logger.attach();
            setTimeout(function () {
                logger.detach();
                setTimeout(done, 5 * 1000);
            }, 10 * 1000);
        });
    });
});