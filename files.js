const fs = require('fs');

// read json file

const data = fs.readFileSync('./data.json', {encoding: 'utf8'});
const dataParsed = JSON.parse(data)

dataParsed.date = new Date().toLocaleDateString()
fs.writeFileSync('./data_modified', JSON.stringify(dataParsed), {encoding: 'utf8', flag: 'w'})