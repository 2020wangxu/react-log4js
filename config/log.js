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
