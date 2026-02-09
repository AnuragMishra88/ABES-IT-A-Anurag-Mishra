const fs=require('fs');
// fs.writeFileSync("./am.txt",'Code is good',()=>{})

fs.readFile('./am.txt',"utf-8",(err,result)=>{
  if(err){
    console.log('ERROR',err);
  }
  else{
    console.log(result)
  }
})

fs.appendFile('./am.txt','and i am happy',()=>{})

fs.cpSync('a1.txt','b1.txt')
// fs.cpAsync('a1.txt','b1.txt',(err,result)=>{
//   if(err){
//     console.log('error');
//   }
//   else{
//     console.log(result);
//   }
// })

fs.unlinkSync('./am.txt')