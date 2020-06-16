const shelljs = require('shelljs');

/**
 * 执行shell脚本
 */
shelljs.exec('rm -rf ./build && cp -r ./src ./build');