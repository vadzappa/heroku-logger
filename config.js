/**
 * Author: Vadim
 * Date: 5/9/2014
 */

var defaultExecutable = 'C:\\Program Files (x86)\\Heroku\\bin\\heroku.bat',
    defaultAppName = 'hisesc5',
    defaultFilename = 'c:\\temp\\hisesc5logs\\hisesc5.log',
    defaultLogLevel = 'silly',
    fileMaxSize = 5 * 1024 * 1024;

var config = {
    heroku: {
        executable: process.env['HEROKU_EXEC'] || defaultExecutable,
        applicationName: process.env['HEROKU_APP_NAME'] || defaultAppName,
        encoding: 'utf8'
    },
    logger: {
        level: process.env['HEROKU_LOG_LEVEL'] || defaultLogLevel,
        filename: process.env['HEROKU_LOG_FILE'] || defaultFilename,
        maxsize: process.env['HEROKU_LOG_MAX_SIZE'] || fileMaxSize
    }
};

module.exports = config;