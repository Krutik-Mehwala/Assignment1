const fs = require('fs').promises;
const { promisify } = require('util');

let path = "./new/test.txt";
let data = "Hey There !!!"

const newFile = fs.writeFile(path, data);

module.exports = newFile;