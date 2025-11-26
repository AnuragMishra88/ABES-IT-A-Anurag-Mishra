const express=require('express');
const app=express();
const cors=require('cors');
const port=8080;

app.use(cors({
  origin: 'http://localhost:5173'
}));


app.get('/',(req,res)=>{
  res.send('<h1>Hi this is my first server</h1>'); 
})


app.get('/api/about',(req,res)=>{
  // res.send('<h1>Hi this is my About</h1>'); 
  const student=[
    {
      id:1,
      name:'Anurag',
      class: 5
    },
    {
      id:2,
      name:'Anura',
      class: 6
    },
    {
      id:3,
      name:'Anur',
      class: 5
    },
    {
      id:4,
      name:'Anu',
      class: 5
    },
    {
      id:5,
      name:'Garuna',
      class: 5
    },
  ];
  res.json(student);
  // res.send("hello");
})

app.get('/contact',(req,res)=>{
  res.send('<h1>This is contact page</h1>')
})

app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);
})