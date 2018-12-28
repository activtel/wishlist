/* File: gulpfile.js */

// модуль, позвол€ющий включать таски из вложенных директорий
var requireDir = require('require-dir');

// устанавливаем значение глобальной переменной,
// позвол€ющей различать в тасках development & production окружени€
global.devBuild = process.env.NODE_ENV !== 'production';

// пробрасываем сборщик в папку с тасками и конфигом
requireDir('./lib/gulp/tasks', { recurse: true });