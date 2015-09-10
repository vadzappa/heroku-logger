/**
 * Author: Vadim
 * Date: 5/9/2014
 */
var config = {
    heroku: {
        executable: 'C:\\Program Files (x86)\\Heroku\\bin\\heroku.bat',
        applicationName: 'hisesc5',
        encoding: 'utf8'
    },
    logger: {
        level: 'silly',
        filename: 'c:\\temp\\hisesc5logs\\hisesc5.log',
        maxsize: 5 * 1024 * 1024
    }
};

module.exports = config;