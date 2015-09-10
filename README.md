# heroku-logger
Logger utility for heroku (using heroku cli and nodejs)

## Windows installation
Use `npm install-service` to install windows service
Use `npm uninstall-service` to uninstall windows service

## Unix installation

1. Put `heroku-logger.conf` under `/etc/init`
2. Configure environment for the `heroku-logger.conf`
 * _HEROKU_APP_NAME_ - name of the application under heroku (could be empty)
 * _HEROKU_LOG_LEVEL_ - logging level according to the [Winston Logger](https://github.com/winstonjs/winston); default - `silly`
 * _HEROKU_LOG_FILE_ - file path for logging
 * _HEROKU_LOG_MAX_SIZE_ - maximum file size (when size reached, new file is created); default 5 MBytes
3. Make folder `heroku-logger` under `/opt/` folder 