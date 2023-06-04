
// Importing https module
const http = require('http');
  
// Setting the configuration for the request
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users/1',
    method: 'GET'
};
    
//Sending GET request
const req = http.request(options, (res) => {
    let data = ''
    res.on('data', (chunk) => { // chunk is a Buffer
        console.log('chunk', chunk.toString())
        data += chunk;
    });
    
    // Ending the response 
    res.on('end', () => {
        console.log('Body:', JSON.parse(data))
    });
}).on("error", (err) => {
    console.log("Error: ", err)
}).end()
    



