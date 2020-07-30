//make an http call to the server function and execute

// const http = require("http");

const express = require('express');
const http = require('http');
const app = express();

const hostname = 'localhost';
const port = 3000;

/*
    define the route for function to be called
*/
app.all('/', (req,res,next) => {
  res.statusCode = 200;
  //console.log('res', req);
  res.setHeader('Content-Type', 'text/plain');
  longRunningApp();
  next();
});


const longRunningApp = function(event){
    const waitingTime = 0.1*60*1000;
    setTimeout(()=>{
        console.log('execution finished!');
    }, waitingTime);
    return true;

};

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Function called');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});