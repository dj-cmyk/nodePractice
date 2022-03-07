const axios = require('axios');
const fs = require('fs');


function cat (path){
    fs.readFile(path, 'utf-8', (err, data) =>{
        if (err) {
            console.error(err);
            process.exit(1);
          }
          console.log(`file contents: ${data}`);
    })
}


function webCat (url){
    axios.get(url)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        })
}




if (process.argv[2].startsWith('http')){
    webCat(process.argv[2])
} else {
    cat(process.argv[2])
}