// Log4Js.ts
 
import log4js from "log4js";
 
log4js.configure({
  appenders: {
    logFile: {
      type: "dateFile",
      filename: "./logs/logFile", // 你要写入日志文件的路径
      alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
      pattern: "yyyy-MM-dd-hh.log",
      encoding: "utf-8",
      maxLogSize: 10240, // 文件最大存储空间
    },
    logErrorFile: {
      type: "dateFile",
      filename: "./logs/logFile", // 你要写入日志文件的路径
      alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
      pattern: "yyyy-MM-dd-hh.error.log",
      encoding: "utf-8",
      maxLogSize: 10240, // 文件最大存储空间
    },
    apiLogFile: {
      type: "dateFile",
      filename: "./logs/apiLogFile", // 你要写入日志文件的路径
      alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
      pattern: "yyyy-MM-dd-hh.log",
      encoding: "utf-8",
      maxLogSize: 10240, // 文件最大存储空间
    },
    apiLogErrorFile: {
      type: "dateFile",
      filename: "./logs/apiLogFile", // 你要写入日志文件的路径
      alwaysIncludePattern: true, // 将模式包含在当前日志文件的名称及其备份中
      pattern: "yyyy-MM-dd-hh.error.log",
      encoding: "utf-8",
      maxLogSize: 10240, // 文件最大存储空间
    },
    logConsole: {
      type: "console",
    },
  },
  categories: {
    default: {
      appenders: ["logFile"],
      level: "all",
    },
    info: {
      appenders: ["logFile"],
      level: "all",
    },
    error: {
      appenders: ["logErrorFile"],
      level: "error",
    },
    apiInfo: {
      appenders: ["apiLogFile"],
      level: "all",
    },
    apiError: {
      appenders: ["apiLogErrorFile"],
      level: "error",
    },
    console: {
      appenders: ["logConsole"],
      level: log4js.levels.ALL.levelStr,
    }
  },
});
 
export default {
  info: function(msg: string, ...args: any[]) {
    const logger = log4js.getLogger(process.env.mode === "production" ? "info": "console")
    logger.info(msg, ...args)
  },
  debug: function(msg: string, ...args: any[]) {
    const logger = log4js.getLogger(process.env.mode === "production" ? "info": "console")
    logger.debug(msg, ...args)
  },
  error: function(msg: string, ...args: any[]) {
    const logger = log4js.getLogger(process.env.mode === "production" ? "error": "console")
    logger.error(msg, ...args)
  },
  apiInfo: function(msg: string, ...args: any[]) {
    const logger = log4js.getLogger(process.env.mode === "production" ? "apiInfo": "console")
    logger.info(msg, ...args)
  },
  apiDebug: function(msg: string, ...args: any[]) {
    const logger = log4js.getLogger(process.env.mode === "production" ? "apiInfo": "console")
    logger.debug(msg, ...args)
  },
  apiError: function(msg: string, ...args: any[]) {
    const logger = log4js.getLogger(process.env.mode === "production" ? "apiError": "console")
    logger.error(msg, ...args)
  },
}
