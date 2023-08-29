let http=require('http');
//port declaration
let port=9001;
// Creating a Server
let server = http.createServer(function(req, res){
    res.write("<h1>Welcome</h1>");
    res.end();
})
// Listen to the Server
server.listen(port, function(){
    console.log('Server Listening to the port :'+port);
})
/* If there is no error it will start the port.Once the port started we can access our server by entering the port number*/
