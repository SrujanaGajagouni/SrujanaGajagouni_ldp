function fetchData(callback) {
    setTimeout(function() {
        console.log('Fetching data...');
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }, 1000);
}

function processData(data, callback) {
    setTimeout(function() {
        console.log('Processing data...');
        data.age = 30;
        callback(data);
    }, 1000);
}

function saveData(data, callback) {
    setTimeout(function() {
        console.log('Saving data...');
        callback();
    }, 1000);
}

fetchData(function(data) {
    processData(data, function(processedData) {
        saveData(processedData, function() {
            console.log('Data saved successfully.');
        });
    });
});
