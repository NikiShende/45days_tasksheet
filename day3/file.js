const fs=require('fs')     //require the file system module first 




fs.readFile('simple.txt', 'utf8', (err, data) => {
  if (err) throw err;                                        ///we can read the file
  console.log(data);
});

 fs.writeFile('simple.txt','utf8',(err,data)=>{                  //write file
  if (err){
    throw err;
    console.log(data);
  }
})

fs.appendFile('simple.txt','\nappended content',(err)=>{
  if (err){                                  
    throw err
  }
  console.log('content appended');
})

fs.unlink('simple.txt',(err)=>{
  if(err){
    throw err;
  }
  console.log('file deleted')
})