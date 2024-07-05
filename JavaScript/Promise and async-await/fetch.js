let promise=fetch("https://www.w3schools.com/js/default.asp")
promise.then(function(response){
    response.text().then(function(data){
        console.log(data)
    });
});
promise.catch(function(error) {
    console.error('Fetch error:', error);
  });