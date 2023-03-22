let promiseCode = require("./promise");
let newFile = require('./fs');

promiseCode.then(() => {
    console.log('Age is valid');
}).catch(() => {
    console.log('Age is not valid. Please enter proper age');
});