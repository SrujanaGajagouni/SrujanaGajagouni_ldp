let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 2000);
});

myPromise.then((result) => {
    console.log("Success:", result);
}).catch((error) => {
    console.error("Error:", error);
});
