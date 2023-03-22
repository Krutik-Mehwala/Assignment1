let age = 20;

let myPromise = new Promise((resolve, reject) => {
    try {
        if (age > 18)
            resolve();
        else
            reject();

    } catch (error) {
        console.log('error', error);
    }

});

module.exports = myPromise;
