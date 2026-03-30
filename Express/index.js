const express=require('express')
const app=express()
port=8000

app.get('/',(req,res)=>{
  res.send("this is ......")
})

app.get('/about-us',(req,res)=>{
  res.send("this is About us page")
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`)
})