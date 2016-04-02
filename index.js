'use strict';

var fs = require('fs');

/**
 * walk dirs
 * @param  {string} path
 */
function wkdir(path) {
    var dirs = path.split('/');
    var tar = [];
    while(dirs.length) {
        tar.push(dirs.shift());
        var t = tar.join('/');
        if (t && !exist(t)) {
            fs.mkdirSync(t);
        }
    }
}

/**
 * check if directory exists.
 * @param  {string} path
 * @return {bool}      [exists]
 */
function exist(path) {
    try {
        var stat = fs.statSync(path);
    } catch (err) {
        switch (err.code) {
            case 'ENOENT':
                return false;
                break;
            case 'EACCES':
                return true;
                break;
            default:

        }
    }
    return stat && stat.isDirectory();
}

module.exports = wkdir;
