var HerokuListener = require('../herokuListener'),
    expect = require('chai').expect;

describe('Heroku Listener', function () {

    var unnamedListener = new HerokuListener(),
        namedListener = new HerokuListener({applicationName: 'hisesc5'});

    describe('start', function () {
        it('should start normally', function () {
            unnamedListener.start();
        });
    });
    describe('stop', function () {
        it('should stop normally', function () {
            unnamedListener.stop();
        });
    });
    describe('named start', function () {
        it('should start normally', function (done) {
            this.timeout(60 * 60 * 1000);
            namedListener.start();
            namedListener.on('line', function (line) {
                console.log(line);
            });
            setTimeout(function () {
                namedListener.stop();
                done();
            }, 10 * 1000);
        });
    });
});