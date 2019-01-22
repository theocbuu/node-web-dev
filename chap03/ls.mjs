import _fs from 'fs';
const fs = _fs.promises;
import util from 'util';

(async() => {
    const files = await fs.readdirSync('.');
    for(let i of files){
        console.log(i);
    }
})().catch(err => {console.error(err);});

//const fs = require('fs');
//const util = require('util');
//const fs_readdir = util.promisify(fs.readdir);

// (async() => {
//     const files = await fs_readdir('.');
//     for(let fn of files){
//         console.log(fn);
//     }
// })().catch(err => {console.error(err);});