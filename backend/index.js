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

// fs.cpSync('a1.txt','b1.txt')
// fs.cpAsync('a1.txt','b1.txt',(err,result)=>{
//   if(err){
//     console.log('error');
//   }
//   else{
//     console.log(result);
//   }
// })

// fs.unlinkSync('./am.txt')

// fs.rename('a1.txt', 'b2.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed successfully');
// });

// fs.mkdir('newFile', (err) => {
//   if (err) {
//     console.error('Error creating directory:', err);
//   } else {
//     console.log('Directory created successfully!');
//   }
// });

fs.stat('b1.txt', (err, stats) => {
  if (err) {
    console.error('Error fetching file stats:', err);
    return;
  }
  console.log('Is file:', stats.isFile());
  console.log('Size:', stats.size, 'bytes');
});
