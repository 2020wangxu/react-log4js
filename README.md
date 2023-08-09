# react-log4js
refer:
https://blog.csdn.net/qq_39834073/article/details/107986691

https://github.com/log4js-node/log4js-node

1.npm install log4js
import * as log4js from "log4js";

const log4js = require('../lib/log4js');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } },
});

const logger = log4js.getLogger('cheese');
logger.level = 'ERROR';

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');




import * as log4js from "log4js";
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});

const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");








function log(level, ...args) {
  const currentLogLevel = process.env.REACT_APP_LOG_LEVEL || 'debug';

  if (level === 'error' && currentLogLevel !== 'silent') {
    console.error(...args);
  } else if (level === 'warn' &&
      (currentLogLevel === 'debug' || currentLogLevel === 'info' || currentLogLevel === 'warn')) {
    console.warn(...args);
  } else if (level === 'info' &&
      (currentLogLevel === 'debug' || currentLogLevel === 'info')) {
    console.info(...args);
  } else if (level === 'debug' &&
      currentLogLevel === 'debug') {
    console.debug(...args);
  }
}

// 使用示例
log('error', '这是一个错误日志');
log('warn', '这是一个警告日志');
log('info', '这是一个信息日志');
log('debug', '这是一个调试日志');
