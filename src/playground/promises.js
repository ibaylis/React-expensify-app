const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');
        //resolve('This is my other resolved data');
        // resolve({
        //     name: 'Ian',
        //     age: 34
        // })
        reject('Something went wrong!');
    }, 1500);

});

console.log('before');

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log('error: ', error);
// });

promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('error: ', error)
});

console.log('after');