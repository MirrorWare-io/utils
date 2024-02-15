
/**
 * Download the metadata json from the m.cyberbrokers.com server;
 */

const fs = require('fs');
const path = require('path');

const fetch = require('node-fetch');

(()=>{
    const url = 'https://m.cyberbrokers.com/eth/cyberbrokers/all';
    const filePath = path.join(__dirname, '../cb_metadata.json');
    fetch(url, { headers: { 'Accept-Encoding': 'identity' } })
        .then(res => res.json())
        .then(json => {
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2),(err)=>{
                if(err) throw err;
            });
        })
        .catch(err => {
            console.error(err);
        }).finally(()=>{
            console.log('[@cyberbrokers/eth-utils] metadata download complete');
        })
})()