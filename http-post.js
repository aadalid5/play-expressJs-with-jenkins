const https = require('http');

var options = {
    // hostname: 'jsonplaceholder.typicode.cofm',
    // path: '/posts',
    host: 'localhost',
    port: '4000',
    path: '/four',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

function postAPI(data) {
    var req = https.request(options, function(response) {

        var data = '';
        response.on('data', (chunk)=>data += chunk) //async

        response.on('end', () => { //async
            console.log(data); // data is the response. If string, no need to parse
            //console.log(JSON.parse(data));  // when API sends object

            if(response.statusCode !=200){
                console.log('bad req', response.statusCode)
            }
            
        });
        
        // console.log(response.statusCode); //sync???
    });

    req.write(JSON.stringify(data))

    req.on('error', e=>{
        console.log("error:", e)
    })
    req.end();
}

postAPI({id:4})