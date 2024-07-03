// First Promise
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 10;
        if (a <= 10) {
            resolve('Promise 1 resolved ');
        } else {
            reject('Promise 1 rejected');
        }
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let b = 20;
        if (b > 20) {
            resolve('Promise 2 resolved ');
        } else {
            reject('Promise 2 rejected ');
        }
    }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let c = 30;
        if (c <= 30) {
            resolve('Promise 3 resolved');
        } else {
            reject('Promise 3 rejected');
        }
    }, 1000);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let d = 40;
        if (d > 40) {
            resolve('Promise 4 resolved');
        } else {
            reject('Promise 4 rejected');
        }
    }, 1000);
});

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let e = 50;
        if (e <= 50) {
            resolve('Promise 5 resolved');
        } else {
            reject('Promise 5 rejected');
        }
    }, 1000);
});


promise1.then((data) => {
    console.log(data);
    return promise2;
}).then((data) => {
    console.log(data);
    return promise3;
}).catch((error) => {
    console.log(error); 
    return promise3;    
}).then((data) => {
    console.log( data);
    return promise4;
}).then((data) => {
    console.log( data);
    return promise5;
}).catch((error) => {
    console.log(error); 
    return promise5;    
}).then((data) => {
    console.log( data);
}).catch((error) => {
    console.log('Final catch:', error); 
});
