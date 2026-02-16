const http=require('http');
const fs=require('fs');
const home=fs.readFileSync('abes.html')
const myserver=http.createServer((req,res)=>{
  res.statusCode=200;
  // res.setHeader('content-type','text/plain');
  res.end(home)
  // console.log('server1');
  // res.end('Hi this is my first server');
})
myserver.listen(8000,()=>{
  console.log('Server is running');
})


// res.end() --> sirf show karana web page par
// res.write() --> jaise ki registration page par details dena
