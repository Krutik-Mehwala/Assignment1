let promiseCode = require("./promise");

promiseCode.then(() => {
    console.log('Age is valid');
}).catch(() => {
    console.log('Age is not valid. Please enter proper age');
});