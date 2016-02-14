'use strict';

var fs = require('fs');

function wkdir(dir) {
    var dirs = dir.split('/');
    var tar = [];
    while(dirs.length) {
        tar.push(dirs.shift());
        var t = tar.join('/');
        if (t && !fs.accessSync(t, fs.W_OK)) {
            fs.mkdirSync(t);
        }
    }
}

module.exports = wkdir;
