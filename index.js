console.log('hello world')

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://www.nemzetisport.hu')
  .then(function (response) {
    // handle success
    console.log(response.data);
    console.log('status: ', response.status);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })