// Simulated getUser function with a callback
function getUser(userId, callback) {
    setTimeout(() => {
      const user = {
        id: userId,
        username: 'user_' + userId,
        email: `user${userId}@example.com`
      };
      callback(null, user); // Simulating success with null error and user object
    }, 1000); // Simulating asynchronous operation
  }
  
  // Promisifying getUser using util.promisify
  const util = require('util');
  const getUserPromise = util.promisify(getUser);
  
  // Using the promisified getUser function
  getUserPromise(123)
    .then(user => {
      console.log('User:', user);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  