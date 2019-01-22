const fs = require('fs');
const fs_promises = fs.promises; //this is working on node 11

//const util = require('util');
//const fs_readdir = util.promisify(fs.readdir);

(async()=>{
    var dir='.';
    if(process.argv[2]) dir = process.argv[2];
    const files = await fs_promises.readdir(dir);
    for(let fn of files){
        console.log(fn);
    }

})().catch(err => {console.error(err);});